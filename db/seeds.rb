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

  server_one = Server.create(name: 'Minecraft Masters', default_id: channel_one.id, avatar: File.open('app/assets/images/minecraft.png') )
  server_two = Server.create(name: 'Overwatch Heroes', default_id: channel_two.id, avatar: File.open('app/assets/images/overwatch.png') )
  server_three = Server.create(name: 'League Legends', default_id: channel_three.id, avatar: File.open('app/assets/images/league.png') )
  server_four = Server.create(name: 'The Call of Duty', default_id: channel_four.id, avatar: File.open('app/assets/images/cod.png') )

  # server_one.avatar = File.open('app/assets/images/minecraft.png')
  # server_two.avatar = File.open('app/assets/images/overwatch.png')
  # server_three.avatar = File.open('app/assets/images/league.png')
  # server_four.avatar = File.open('app/assets/images/cod.png')

  # server_one.save
  # server_two.save
  # server_three.save
  # server_four.save

  Channel.all[0].update(server_id: server_one.id)
  Channel.all[1].update(server_id: server_two.id)
  Channel.all[2].update(server_id: server_three.id)
  Channel.all[3].update(server_id: server_four.id)

  user_one = User.create(username: 'brian', password: 'starwars')
  user_two = User.create(username: 'luke skywalker', password: 'starwars')
  user_three = User.create(username: 'han solo', password: 'starwars')
  user_four = User.create(username: 'chewbacca', password: 'starwars')
  user_five = User.create(username: 'obi wan', password: 'starwars')
  user_six = User.create(username: 'leia organa', password: 'starwars')
  user_seven = User.create(username: 'darth vader', password: 'starwars')
  user_eight = User.create(username: 'yoda', password: 'starwars')
  user_nine = User.create(username: 'r2d2', password: 'starwars')
  user_ten = User.create(username: 'c3p0', password: 'starwars')
  user_eleven = User.create(username: 'greedo', password: 'starwars')
  guest = User.create(username: 'guest', password: 'password')

  # Subscription.create(user_id: user_one.id, server_id: server_one.id)
  # Subscription.create(user_id: user_one.id, server_id: server_two.id)
  # Subscription.create(user_id: user_one.id, server_id: server_three.id)
  # Subscription.create(user_id: user_one.id, server_id: server_four.id)

  # Subscription.create(user_id: user_two.id, server_id: server_one.id)
  # Subscription.create(user_id: user_two.id, server_id: server_two.id)
  # Subscription.create(user_id: user_two.id, server_id: server_three.id)
  # Subscription.create(user_id: user_two.id, server_id: server_four.id)

  # Subscription.create(user_id: user_three.id, server_id: server_one.id)
  # Subscription.create(user_id: user_three.id, server_id: server_two.id)
  # Subscription.create(user_id: user_three.id, server_id: server_three.id)
  # Subscription.create(user_id: user_three.id, server_id: server_four.id)

  # Subscription.create(user_id: user_four.id, server_id: server_one.id)
  # Subscription.create(user_id: user_four.id, server_id: server_two.id)
  # Subscription.create(user_id: user_four.id, server_id: server_three.id)
  # Subscription.create(user_id: user_four.id, server_id: server_four.id)

  # Subscription.create(user_id: user_five.id, server_id: server_one.id)
  # Subscription.create(user_id: user_five.id, server_id: server_two.id)
  # Subscription.create(user_id: user_five.id, server_id: server_three.id)
  # Subscription.create(user_id: user_five.id, server_id: server_four.id)

  # Subscription.create(user_id: user_six.id, server_id: server_one.id)
  # Subscription.create(user_id: user_six.id, server_id: server_two.id)
  # Subscription.create(user_id: user_six.id, server_id: server_three.id)
  # Subscription.create(user_id: user_six.id, server_id: server_four.id)

  # Subscription.create(user_id: user_seven.id, server_id: server_one.id)
  # Subscription.create(user_id: user_seven.id, server_id: server_two.id)
  # Subscription.create(user_id: user_seven.id, server_id: server_three.id)
  # Subscription.create(user_id: user_seven.id, server_id: server_four.id)

  # Subscription.create(user_id: user_eight.id, server_id: server_one.id)
  # Subscription.create(user_id: user_eight.id, server_id: server_two.id)
  # Subscription.create(user_id: user_eight.id, server_id: server_three.id)
  # Subscription.create(user_id: user_eight.id, server_id: server_four.id)


  # Subscription.create(user_id: user_nine.id, server_id: server_one.id)
  # Subscription.create(user_id: user_nine.id, server_id: server_two.id)
  # Subscription.create(user_id: user_nine.id, server_id: server_three.id)
  # Subscription.create(user_id: user_nine.id, server_id: server_four.id)


  # Subscription.create(user_id: user_ten.id, server_id: server_one.id)
  # Subscription.create(user_id: user_ten.id, server_id: server_two.id)
  # Subscription.create(user_id: user_ten.id, server_id: server_three.id)
  # Subscription.create(user_id: user_ten.id, server_id: server_four.id)

  # Subscription.create(user_id: guest.id, server_id: server_one.id)
  # Subscription.create(user_id: guest.id, server_id: server_two.id)
  # Subscription.create(user_id: guest.id, server_id: server_three.id)
  # Subscription.create(user_id: guest.id, server_id: server_four.id)