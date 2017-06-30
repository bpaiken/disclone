class Api::ChannelsController < ApplicationController

  def index
    @user = current_user
    render '/api/channels/index'
  end

  def show
    @channel = Channel.find(params[:id])    
  end

  def create
    if(params[:users])
      @channel = Channel.new(channel_params)
      if @channel.save!
        channel_id = @channel.id
        params[:users].keys.map(&:to_i).each do |id|
          Direct.create(user_id: id, channel_id: channel_id)  
        end
        render '/api/channels/show'
      else
        render json: @channel.errors.full_messages
      end   
    else   
      @channel = Channel.new(channel_params)

      if @channel.save
        render '/api/channels/show'
      else
        render json: @channel.errors.full_messages
      end
    end  
  end

  def update
    @channel = Channel.find(params[:id])
    @channel.update(channel_params)
    render '/api/channels/show'
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
