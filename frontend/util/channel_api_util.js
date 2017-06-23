export const createChannel = (channel) => {
  $.post('/api/channels', {
    channel: {
      name: channel.name,
      topic: channel.topic,
      server_id: channel.serverId,
    }
  });
}
