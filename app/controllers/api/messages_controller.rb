class Api::MessagesController < ApplicationController

  def show
  end

  def create
    @message = Message.new(message_params)
    
    if @message.save

      Pusher.trigger(@message.channel_id.to_s, 'post_message', {
      message: @message
    })
      render 'api/messages/show'
    end
    #add pusher
  end




  
  private
  def message_params
    params.require(:message).permit(:body, :user_id, :channel_id)
  end
end
