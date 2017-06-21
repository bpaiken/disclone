# config/initializers/pusher.rb
require 'pusher'

Pusher.app_id = '353017'
Pusher.key = '05f19b135aba7470dff0'
Pusher.secret = '3ab7cc77f2cb27cab19f'
Pusher.cluster = 'us2'
Pusher.logger = Rails.logger
Pusher.encrypted = true

# app/controllers/hello_world_controller.rb
# below is code to publish an event
# this goes in the channel controller
class HelloWorldController < ApplicationController
  def hello_world
    Pusher.trigger('my-channel', 'message_published', {
      message: 'hello world'
    })
  end
end


//subscription code goes in component did mount.
/
/
/*globals pusher*/
var pusher = new pusher(your_key, {
  encrypted: true
})

// Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var channel = pusher.subscribe('my-channel_ + this.props.params.channelId');
    channel.bind('message_published', function(data) {
      // do this action
        //fetch action...go fetch whatever contains all the messages
      alert(data.message);
    }); 

    //you make message
    //hits controller, which pushs an event to pusher channel
    //when component mounts you subscribe to pusher channel
    //when even gets pushed you send ajax request for all data
    //react will rerender component and update data
    