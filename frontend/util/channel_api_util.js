export const createChannel = (channel) => {
  return $.post('/api/channels', {
    channel: {
      name: channel.name,
      topic: channel.topic,
      server_id: channel.serverId,
    }
  });
}

export const patchChannel = channel => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/channels/${channel.id}`,
    data: { channel }
  }
  )
}

export const createDirect = (channel) => {
  return $.post('/api/channels', {
    channel : {
      name: channel.name,
      topic: channel.topic,
      direct: channel.direct
    },
    users: channel.users
  })
}

export const fetchDirects = () => {
  return $.get('/api/channels')
}


