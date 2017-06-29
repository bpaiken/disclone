
json.currentUser do
  json.avatarUrl @user.avatar.url
  json.username @user.username
end

json.users do
  json.set! @user.id do
    json.avatarUrl @user.avatar.url
    json.username @user.username
  end
end
  