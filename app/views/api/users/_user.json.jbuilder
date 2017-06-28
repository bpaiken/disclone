json.extract! user, :id, :username
json.avatarUrl asset_path(user.avatar.url)
json.directs user.channels.map(&:id)


json.channels do
  user.channels.each do |channel|
    json.set! channel.id do
      json.users channel.users.map(&:id)
      json.direct channel.direct
      json.id channel.id
      json.messages channel.messages.map(&:id)
    end
  end
  user.servers.each do |server|
    server.channels.each do |channel|
      json.set! channel.id do
        json.users channel.users.map(&:id)
        json.direct channel.direct
        json.id channel.id
        json.messages channel.messages.map(&:id)
      end
    end 
  end
end

json.servers do
  user.servers.each do |server|
    json.set! server.id do
      json.id server.id
      json.name server.name
      json.defaultId server.default_id
      json.users server.users.map(&:id)
      json.channels server.channels.map(&:id)
      json.avatarUrl server.avatar.url
    end
  end
end