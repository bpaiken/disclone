json.extract! @user, :id, :username

json.avatarUrl asset_path(@user.avatar.url)

json.directs @user.channels.map(&:id)

json.servers do
    @user.servers.each do |server|
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

json.channels do
  @user.channels.each do |channel|
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

# json.users do
#   @user.channels.each do |channel|


