class Api::ChannelsController < ApplicationController

  def index
    @user = User.find(params[:id])
    @channels = @user.channels
  end

  def show
    @channel = Channel.find(params[:id])    
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      render '/api/channels/show'
    else
      render json: @channel.errors.full_messages
    end
  end

  def update
    @channel = Channel.find(params[:id])
    @channel.update(channel_params)
    render show: @channel
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    # render ? 
  end

  private
  def channel_params
    params.require(:channel).permit(:topic, :name, :direct, :server_id)
  end
end
