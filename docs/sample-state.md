```js
{
  currentUser: {
    id: 1,
    username: "average_user",
    servers: [2,5,7,3,4],
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createServer: {errors: ["server name can't be blank"]},
    createChannel: {errors: ["channel name can't be blank"]},
    joinServer: {errors: ["server not found"]}
  },
  servers: {
    id: 22,
    name: "best_server",
    users: [1,2,3,6],
    channels: [2,6,8,23]
  },
  channels: {
    id: 8
    name: "best_channel",
    topic: "the best memes!",
    messages: [1,3,8,4,34,57,103]
  },
  users: { 
    3: {
      id: 3,
      username: "other_user",
      avatar_url: "assets/images/their_pic_here.png"
    } 
  },
  servers: {
    3: {
      id: 3,
      name: "server_name",
      avatar_url: "assets/images/this_server.png"
    }
  },
  channels: {
    6: {
      id: 6,
      name: "channel_name"
    }
  },
  messages: {
    9: {
      id: 9,
      body: "this is a great message",
      timestamp: "9:51pm, June 20 2017",
      user_id: 4
    }
  }
}
```

  
