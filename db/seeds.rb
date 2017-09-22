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

  # Servers
  server_one = Server.create(name: 'Minecraft Masters', default_id: channel_one.id, avatar: File.open('app/assets/images/minecraft.png') )
  server_two = Server.create(name: 'Overwatch Heroes', default_id: channel_two.id, avatar: File.open('app/assets/images/overwatch.png') )
  server_three = Server.create(name: 'League Legends', default_id: channel_three.id, avatar: File.open('app/assets/images/league.png') )
  server_four = Server.create(name: 'The Call of Duty', default_id: channel_four.id, avatar: File.open('app/assets/images/cod.png') )

  Channel.all[0].update(server_id: server_one.id)
  Channel.all[1].update(server_id: server_two.id)
  Channel.all[2].update(server_id: server_three.id)
  Channel.all[3].update(server_id: server_four.id)

  # Users
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

  message_one = Message.create(user_id: 5, channel_id: 1, body: 'Remember a Jedi can feel the Force flowing through him' )
  message_two = Message.create(user_id: 2, channel_id: 1, body: 'You mean it controls your actions?' )
  message_three = Message.create(user_id: 5, channel_id: 1, body: 'Partially...but it also obeys your commands' )
  message_four = Message.create(user_id: 3, channel_id: 1, body: 'lol...hokey religions and ancient weapons are no match for a good blaster at your side kid' )
  message_five = Message.create(user_id: 2, channel_id: 1, body: "you don't believe in the force do you?" )
  message_six = Message.create(user_id: 3, channel_id: 1, body: "Kid I've flown from one side of this galaxy to the other")
  message_seven = Message.create(user_id: 3, channel_id: 1, body: "I've seen a lot of strange stuff...but I've never seen anything to make me believe there's one all-powerful Force controlling everything" )
  message_eight = Message.create(user_id: 3, channel_id: 1, body: "There's no mystical energy field that controls my destiny. Anyway it's all a lot of simple tricks and nonsense" )
  message_nine = Message.create(user_id: 5, channel_id: 1, body: 'I suggest you try it again Luke. Only this time, let go your conscious self and act on instinct')
  message_ten = Message.create(user_id: 2, channel_id: 1, body: "But with the blast shield down, I can't even see! How am I supposed to fight?")
  message_eleven = Message.create(user_id: 5, channel_id: 1, body: "Your eyes can deceive you. Don't trust them. Stretch out with your feelings!")
  message_ten = Message.create(user_id: 2, channel_id: 1, body: "[Luke succeeds in blocking the lasers]!")
  message_eleven = Message.create(user_id: 3, channel_id: 1, body: 'I call it luck')
  message_twelve = Message.create(user_id: 5, channel_id: 1, body: 'In my experience there is no such thing as luck')