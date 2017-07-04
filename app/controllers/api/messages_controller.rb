class Api::MessagesController < ApplicationController

  def show
  end

  def create
    @message = Message.new(message_params)
    
    if @message.save

      Pusher.trigger(@message.channel_id.to_s, 'message', {
        messages: 
          { @message.id => {
            id: @message.id,
            body: @message.body,
            created_at: @message.created_at,
            user_id: @message.user_id
          }}
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
