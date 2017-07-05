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

placeholder picture

### Start Direct/Group Channels
Unlike server channels (which are accessible by all users subscribed to the server), direct and group messages are only accessible by the users selected during channel creation.  Any user can create a direct channel through the UserSearch component, which is accessed by through the direct channel index and 'Start a Conversation' feature.  The UserSearch component allows users to search for and select other users to be included in a direct/group channel.

placeholder picture

### Edit User Avatar

## Future of the Project

### Message Search

### Live Voice Chat