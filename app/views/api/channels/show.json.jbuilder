json.messages do
  @channel.messages.each do |message|
    json.partial! 'api/messages/message', message: message
  end
end

json.channels do
  json.partial! 'api/channels/channel', channel: @channel
end

unless @channel.direct
  json.servers do
    json.partial! 'api/servers/server', server: @channel.server
  end
end

if @channel.direct
  json.users do
    @channel.users.each do |user|
      json.partial! 'api/users/tempuser', user: user
    end
  end

  json.currentUser do
    json.directs current_user.channels.pluck(:id)
  end
end