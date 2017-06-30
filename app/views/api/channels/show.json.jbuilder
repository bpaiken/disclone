json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.body message.body
      json.channelId message.channel_id
      json.userId message.user_id
      json.createdAt message.created_at      
    end
  end
end

json.channels do
  json.set! @channel.id do
    json.messages @channel.messages.pluck(:id)
    json.name @channel.name
    json.id @channel.id
    json.topic @channel.topic
    json.direct @channel.direct
    json.serverId @channel.server_id
    json.users @channel.users.map(&:id)
  end
end

json.channelId @channel.id
#TODO: fix below....this is here for direct index...which is currently taking channels from current user...it should be taking channels from channels
json.currentUser do
  json.directs current_user.channels.map(&:id)
  json.channels do
  current_user.channels.each do |channel|
    json.set! @channel.id do
    json.messages @channel.messages.pluck(:id)
    json.name @channel.name
    json.id @channel.id
    json.topic @channel.topic
    json.direct @channel.direct
    json.serverId @channel.server_id
    json.users @channel.users.map(&:id)
end  
end
end
end


json.users do
  @channel.users.each do |user|
    json.set! user.id do 
      json.id user.id
      json.username user.username
      json.avatarUrl asset_path(user.avatar.url)
    end
  end
end
