export const fetchMessages = (id) => {
  return $.get(`/api/channels/${id}`);
};

