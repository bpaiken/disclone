class PusherController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => :webhook


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
 
  private
    def user_is_offline(id)
      user = User.find(id)
      user.online = false
      user.save
      push_user(user)
    end

    def user_is_online(id)
      user = User.find(id)
      user.online = true
      user.save
      push_user(user)
    end

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
