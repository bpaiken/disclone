json.set! user.id do
  json.id user.id
  json.username user.username
  json.avatarUrl asset_path(user.avatar.url)
  json.online user.online
end

#TODO: make this _user.json.jbuilder