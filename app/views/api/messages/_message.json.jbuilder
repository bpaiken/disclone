json.set! message.id do
  json.id message.id
  json.body message.body
  json.channelId message.channel_id
  json.userId message.user_id
  json.createdAt message.created_at      
end