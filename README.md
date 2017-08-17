# Disclone

[Disclone Live][heroku]

[heroku]: http:/disclone.herokuapp.com

Disclone is a web application based off Discord. Disclone is built using Ruby on Rails and React w/ Redux.

## Features & Implementation

### Live Chat

Live chat is accomplished with the help of websockets.  The websocket library Pusher was chosen as the means of implementation.

On the frontend, the Pusher library is imported into the MessageIndex component using npm and webpack. A pusher instance variable is created in the MessageIndex's constructor method...

```javascript
    this.pusher = new Pusher('pusher_key', {
      cluster: 'us2',
      encrypted: true
    });
```

When the message index component has mounted, the Pusher variable subscribes to a channel with channel id as the name.	This subscription returns a channel object, which can be bound with two arguements: an event type and a callback.  The callback will be excuted when an event of 'event type' occurs on the subscribed channel.  In this case, the event type is 'message' and the callback is used to dispatch the received message, as well as update the internal state of the message index...

```javascript
componentDidMount() {
    Pusher.logToConsole = true;
    let channel = this.pusher.subscribe(this.props.match.params.channelId.toString());
    channel.bind('message', (message) => {
      this.props.dispatchMessage(message); // update global state
      this.updateMessageBlocks(message); // update internal state
    });
  }
```

On the Rails backend, the Pusher gem is used in the to gain access the Pusher class within the MessagesController.  When a user posts a message, this pusher object triggers an event on the channel that the message belongs too via the channel id.  The event type is 'message' and the data the the event carries is constructed so that it can be easily merged into the redux managed global state...

```ruby
def create
    @message = Message.new(message_params)
    
    if @message.save
      Pusher.trigger(@message.channel_id.to_s, 'message', {
        messages: 
          { @message.id => {
            id: @message.id,
            body: @message.body,
            createdAt: @message.created_at,
            userId: @message.user_id
          }}
      })
      render 'api/messages/show'
    end
  end
```

### Create Server Channels 

Server channels belong to servers, and have many messages.  Server channels can be accessed by any users that subscribe to the server that holds the channel. All servers are created with a channel named 'general', but users have the ability to create new channels for each server.  Users also have the ability to edit those channels' names and topics.  This is done through the create & edit channel modals.

![alt text][create_edit_channel]

[create_edit_channel]: ./docs/gifs/create_edit_channel.gif

### Start Direct/Group Channels
Unlike server channels (which are accessible by all users subscribed to the server), direct and group messages are only accessible by the users selected during channel creation.  Any user can create a direct channel through the UserSearch component, which is accessed by through the direct channel index and 'Start a Conversation' feature.  The UserSearch component allows users to search for and select other users to be included in a direct/group channel.

![alt text][direct_message]

[direct_message]: ./docs/gifs/direct_message.gif

### Edit User Avatar

User avatars are displayed with the users username in several locations throughout the application.  Users have the option to edit their avatar by uploading files from their own device.  The is accomplished through the `EditUser` component, a modal that is opened by clicking the cog button in the `CurrentUser` component.  Users are able to preview an uploaded image prior to saving the change.  

![alt text][edit_user]

[edit_user]: ./docs/gifs/edit_avatar.gif

Upon uploading and saving an avatar image, the image is sent to the database via an ajax post.  Rather than save the image in the local database, the Ruby gem Paperclip is used to post the image to an Amazon Simple Storage Service (S3) bucket.  The image url is than saved as a property on the user model.

### Who's Online?

Disclone lets users know other users' online status.  Online status is displayed in each server's User Index, as well as each user's direct channel index:

![alt text][online_status]

[online_status]: ./docs/images/online_status.png

Online status updates are accomplished with the help of Webhooks via Pusher. When ever a user logs into, logs out of, or exits the browser, a request hits the server and is routed to the Pusher Controller.  Based on the data in the request, the webhook action will update a users online status in the database, as well as trigger an event via the pusher variable.  The event data holds an individual user's online status, and is constructed so that it can be easily merged into the an applications global state on the front end...

```ruby
class PusherController < ApplicationController
 ...
   def webhook
    webhook = Pusher::WebHook.new(request)
    if webhook.valid?
      webhook.events.each do |event|
        if event['channel'] != 'users' && event['channel'].include?('user')
          user_id = event['channel'][4..-1].to_i
          user_is_online(user_id) if event['name'] == 'channel_occupied'
          user_is_offline(user_id) if event['name'] == 'channel_vacated'
        end
      end
      render text: 'ok'
    else
      render text: 'invalid', status: 401
    end
  end
  
  ...

  def push_user(user)
    Pusher.trigger('users', 'newUser', {
      users: {
        user.id => {
          online: user.online
        }
      }
    })
  end
end
```

### Message Blocks

Messages are displayed and managed by the `MessageIndex` component.  Rather than display each message individually, messages are organized into blocks.  Message blocks are used to display one or more consecutive messages by an individual user, as well as that user's avatar, username, and a message timestamp.  

![alt text][message_block]

[message_block]: ./docs/images/message_block.png

When switching channels, the messages belonging to that channel are sorted in the `buildMessageBlocks` function.  This method sorts users' consecutive messages into arrays, and sets the `MessageIndex` internal state `messageBlocks` to an array holding all of the message arrays.  

```javascript
buildMessageBlocks() {
  ...
  const messageBlocks = []
  let block = []

  for (let i = 0; i < messageArray.length; i++) {
    let prevMessage = messages[messageArray[i - 1]]
    let message = messages[messageArray[i]]
    let nextMessage = messages[messageArray[i + 1]]
    
    // first message
    if (i === 0) {
      block.push(messages[messageArray[i]]) 
    }

      // not first message AND message userId matches previous message userId
    if (i !== 0 && prevMessage.userId === message.userId) { 
      block.push(message)
    }

    // not first message AND previous message userId does not match message userId
    if (i !== 0 && prevMessage.userId !== message.userId) {  
      messageBlocks.push(block)
      block = []
      block.push(message)  
    }

    // last message
    if(i === messageArray.length - 1) {
      messageBlocks.push(block)
      block = []  
    }
  }

  this.setState({
    messageBlocks: messageBlocks
  })
}
```

When the `MessageIndex` component renders, each array of messages is passed to a `MessageBlock` component.  The `MessageBlock` component does the work of actually building each individual block based on the array of messages it receives.

```javascript
render() {
   ...
      return (
        <div className='message-index-wrapper'>
          <ul className="scroll-y">
            {this.state.messageBlocks.map((block,i) => {
              return <MessageBlockContainer key={i} serverId={serverId}
                      channelId={channelId} messages={block} />
            })}

            <div ref='scroll'></div>
          </ul>
          <MessageBarContainer />
        </div>
      );
    }
```

When a new message is received, the `messageBlocks` slice of internal state is updated.  The new message's `userId` is compared to the previous message's `userId` to determine whether it warrants or its own message block or should be pushed into the previous message block.



## Future of the Project

### Message Search
  Search through the message history of all messages pertaining to the current user (i.e., belonging to channels or direct channels that user has access too).

### Notifications
  Add notifications for various events such as a new user joining a server, new messages on a direct channel, and another user creating a direct channel that the current user is included on.

### Live Voice Chat
  Implement voice channels via Pusher and webRTC.  Users can join into a voice channel and communicate with other users who are currently dialed into that voice channel.