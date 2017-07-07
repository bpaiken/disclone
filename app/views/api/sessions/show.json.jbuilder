# currentUser
json.currentUser do
  json.partial! 'api/users/current_user', user: current_user
end

# channels (directs and server)
json.channels do
  @user.channels.each do |channel| 
    json.partial! 'api/channels/channel', channel: channel
  end
  @user.servers.each do |server|
    server.channels.each do |channel|
      json.partial! 'api/channels/channel', channel: channel
    end
  end
end

# servers
json.servers do
  @user.servers.each do |server|
    json.partial! 'api/servers/server', server: server
  end
end

# users
json.users do
  @user.servers.each do |server|
    server.users.each do |user|
      json.partial! 'api/users/tempuser', user: user
    end
  end
end

#messages
json.messages do
  @user.channels.each do |channel|
    channel.messages.each do |message|
      json.partial! 'api/messages/message', message: message
    end
  end
  @user.servers.each do |server|
    server.channels.each do |channel|
      channel.messages.each do |message|
        json.partial! 'api/messages/message', message: message
      end
    end
  end
end
