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
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `/api/channels/${channel.id}`,
    data: { channel }
  }
  )
}
