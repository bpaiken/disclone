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
  end
end