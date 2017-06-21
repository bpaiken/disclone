class Api::MessagesController < ApplicationController

  def post
    @message = Message.new(message_params)
    
    #add pusher
  end
  
  private
  def message_params
    params.require(:message).permit(:body)
  end
end
