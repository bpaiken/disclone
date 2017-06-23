json.messages do
    json.set! @message.id do
      json.body @message.body
      json.channelId @message.channel_id
      json.userId @message.user_id
      json.createdAt @message.created_at      
    end
end

json.channels do
  json.set! @message.channel.id do
    json.messages @message.channel.messages.pluck(:id)
  end
end