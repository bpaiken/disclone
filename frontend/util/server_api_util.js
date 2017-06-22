export const fetchServer = (id) => {
  return $.get(`/api/servers/${id}`);
};

export const createServer = (server) => {
  return $.post('/api/servers',{server: {name: server.name}});
}