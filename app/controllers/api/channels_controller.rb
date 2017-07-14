class Api::ChannelsController < ApplicationController

  def index
    @user = current_user
    render '/api/channels/index'
  end

  def show
    @channel = Channel.find(params[:id])    
  end

  def create
    #direct channels
    if(params[:users])
      @channel = Channel.new(channel_params)
      if @channel.save!
        channel_id = @channel.id
        user_ids = params[:users].keys.map(&:to_i)
        user_ids.each do |id|
          Direct.create(user_id: id, channel_id: channel_id) 
        end

        push_direct_channel(@channel, user_ids)
        render '/api/channels/show'
      else
        render json: @channel.errors.full_messages
      end

    #server channels  
    else   
      @channel = Channel.new(channel_params)

      if @channel.save
        push_server_channel(@channel)
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

  def push_direct_channel(channel, user_ids)
    user_ids.each do |id|
    next if current_user.id == id
    Pusher.trigger('user' + id.to_s, 'newChannel', {
      channels: {
        channel.id => {
          messages: @channel.messages.map(&:id),
          name: channel.name,
          id: channel.id,
          topic: channel.topic,
          direct: channel.direct,
          serverId: channel.server_id,
          users: channel.users.map(&:id),
        }
      },
      currentUser: {
        directs: User.find(id).channels.pluck(:id)
      }
    })
    end  
  end

  def push_server_channel(channel)
    channel_ids = channel.server.channels.pluck(:id)
      Pusher.trigger('server' + channel.server.id.to_s, 'newChannel', {
        channels: {
          channel.id => {
            messages: [],
            name: channel.name,
            id: channel.id,
            topic: channel.topic,
            direct: false,
            serverId: channel.server_id,
            users: [],
          }
        },
        servers: {
          channel.server.id => {
            channels: channel_ids
          }
        }
      })
  end

end
