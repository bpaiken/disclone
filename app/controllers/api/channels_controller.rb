class Api::ChannelsController < ApplicationController

  def index
    @user = User.find(params[:id])
    @channels = @user.channels
    render :index
  end

  def show
    @channel = channel.find(params[:id])    
    render :show
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      render :show @channel
    else
      render :json @channel.messages
    end
  end

  def update
    @channel = Channel.find(params[:id])
    @channel.update(channel_params)
    render :show @channel
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    # render ? 
  end

  private
  def channel_params
    params.require(:channel).permit(:topic, :name, :direct)
  end
end
