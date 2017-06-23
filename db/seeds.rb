# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

  Channel.destroy_all
  Server.destroy_all
  User.destroy_all
  Subscription.destroy_all

  channel_one = Channel.create(name: 'general', topic: "general", server_id: 1)
  channel_two = Channel.create(name: 'general', topic: "general", server_id: 2)
  channel_three = Channel.create(name: 'general', topic: "general", server_id: 3)
  channel_four = Channel.create(name: 'general', topic: "general", server_id: 4)

  server_one = Server.create(name: 'Slash Gaming', default_id: channel_one.id)
  server_two = Server.create(name: 'Overwatch', default_id: channel_two.id)
  server_three = Server.create(name: 'LoL Masters', default_id: channel_three.id)
  server_four = Server.create(name: 'Call of Duty', default_id: channel_four.id)

  Channel.all[0].update(server_id: server_one.id)
  Channel.all[1].update(server_id: server_two.id)
  Channel.all[2].update(server_id: server_three.id)
  Channel.all[3].update(server_id: server_four.id)

  user_one = User.create(username: 'brian', password: 'starwars')
  guest = User.create(username: 'guest', password: 'password')

  Subscription.create(user_id: user_one.id, server_id: server_one.id)
  Subscription.create(user_id: user_one.id, server_id: server_two.id)
  Subscription.create(user_id: user_one.id, server_id: server_three.id)
  Subscription.create(user_id: user_one.id, server_id: server_four.id)

  Subscription.create(user_id: guest.id, server_id: server_one.id)
  Subscription.create(user_id: guest.id, server_id: server_two.id)
  Subscription.create(user_id: guest.id, server_id: server_three.id)
  Subscription.create(user_id: guest.id, server_id: server_four.id)