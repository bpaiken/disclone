json.extract! @user, :id, :username, 

json.servers do
  @user.servers.each do |server|
    json.set! server.id do
    json.id server.id
    json.name server.name
    json.defaultId server.default_id
    json.users server.users.map(&:id)
    json.channels server.channels.map(&:id)
  end


