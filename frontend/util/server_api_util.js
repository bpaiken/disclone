export const fetchServer = (id) => {
  return $.get(`/api/servers/${id}`);
};