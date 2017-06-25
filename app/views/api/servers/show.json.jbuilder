json.server do
  json.set! @server.id do
    json.id @server.id
    json.name @server.name
    json.defaultId @server.default_id
    json.users @server.users.map(&:id)
    json.channels @server.channels.map(&:id)
    json.avatarUrl asset_path(@server.avatar.url)
  end
end

json.users do
  @server.users.each do |user|
    json.set! user.id do 
      json.id user.id
      json.username user.username
      json.avatarUrl asset_path(user.avatar.url)
    end
  end
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do
      json.id channel.id
      json.name channel.name
      json.topic channel.topic
      json.direct channel.direct
      json.messages channel.messages.map(&:id)
    end
  end
end