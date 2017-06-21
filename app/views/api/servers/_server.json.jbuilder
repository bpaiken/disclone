
json.server do
  json.id server.id do
    json.id server.id
    json.name server.name
    json.users server.users.map{ |user| user.id }
    json.channels server.channels.map{ |channel| channel.id }
  end
end

json.users server.users do |user|
  json.id user.id do 
    json.id user.id
    json.username user.username
  end
end

json.channels server.channels do |channel|
  json.id channel.id do 
    json.id channel.id
    json.name channel.name
    json.topic channel.topic
    json.direct channel.direct
 end
end

# {
#   servers: {
#     id: {
#       id: 3
#       name: 'servername'
#       users: [1,2,3]
#       channels: [1,2,3]
#     }
#   }
#   users: {
#     1: {
#       id: 1
#       name: 'username'
#     }
#   }
#   channels: {
#     1: {
#       id: 1
#       name: 'channelname'
#     }
#   }
# }





