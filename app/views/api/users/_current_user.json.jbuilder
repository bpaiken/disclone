json.extract! user, :id, :username
json.avatarUrl asset_path(user.avatar.url)
json.directs user.channels.pluck(:id)