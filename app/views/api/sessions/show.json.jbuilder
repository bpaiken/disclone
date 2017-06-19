json.currentUser do
  json.id current_user.id
  json.username current_user.username
  # add image url
  # add servers
end
json.errors [flash[:errors]]
