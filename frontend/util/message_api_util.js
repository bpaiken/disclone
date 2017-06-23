export const fetchMessages = (id) => {
  return $.get(`/api/channels/${id}`);
};

export const postMessage = (message) => {
  return $.post(
    '/api/messages',
    { 
      message: {
        body: message.body, 
        user_id: message.userId,
        channel_id: message.channelId
      }
    });
};
