# partial for bootstrap current user to window on refresh...see root.html.erb
#TODO: dont use partial in root.html.erb

# currentUser
json.currentUser do
  json.extract! user, :id, :username
  json.avatarUrl asset_path(user.avatar.url)
  json.directs user.channels.pluck(:id)
end

# channels (directs and server)
json.channels do
  user.channels.each do |channel| 
    json.set! channel.id do
      json.messages channel.messages.pluck(:id)
      json.name channel.name
      json.id channel.id
      json.topic channel.topic
      json.direct channel.direct
      json.serverId channel.server_id
      json.users channel.users.map(&:id)
    end
  end
  user.servers.each do |server|
    server.channels.each do |channel|
      json.set! channel.id do
        json.messages channel.messages.pluck(:id)
        json.name channel.name
        json.id channel.id
        json.topic channel.topic
        json.direct channel.direct
        json.serverId channel.server_id
        json.users channel.users.map(&:id)
      end
    end
  end
end

# servers
json.servers do
  user.servers.each do |server|
    json.set! server.id do
      json.id server.id
      json.name server.name
      json.defaultId server.default_id
      json.users server.users.map(&:id)
      json.channels server.channels.map(&:id)
      json.avatarUrl asset_path(server.avatar.url)
    end
  end
end

# users
json.users do
  user.servers.each do |server|
    server.users.each do |user|
      json.set! user.id do
        json.id user.id
        json.username user.username
        json.avatarUrl asset_path(user.avatar.url)
        json.online user.online
      end
    end
  end
end

#messages
json.messages do
  user.channels.each do |channel|
    channel.messages.each do |message|
      json.set! message.id do
        json.id message.id
        json.body message.body
        json.channelId message.channel_id
        json.userId message.user_id
        json.createdAt message.created_at      
      end
    end
  end
  user.servers.each do |server|
    server.channels.each do |channel|
      channel.messages.each do |message|
        json.set! message.id do
          json.id message.id
          json.body message.body
          json.channelId message.channel_id
          json.userId message.user_id
          json.createdAt message.created_at      
        end
      end
    end
  end
end
