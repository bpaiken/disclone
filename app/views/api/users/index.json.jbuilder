json.users do
  @users.each do |user|
    json.set! user.id do 
      json.id user.id
      json.username user.username
      json.avatarUrl asset_path(user.avatar.url)
    end
  end
end