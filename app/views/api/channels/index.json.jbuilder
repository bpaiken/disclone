#used for fetch direct channels on direct index

json.currentUser do 
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
  end