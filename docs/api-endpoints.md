# API Endpoints

## HTML API

### Root

- `GET /` - loads disclone web application

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:id/servers`
  - index of all servers the current user has subscribed to
- `GET /api/users/:id/channels`
  - index of all the direct message conversations a user has started

### Session

- `POST /api/session`
- `DELETE /api/session`

### Servers

- `POST /api/servers`
- `DELETE /api/servers/:id`
- `PATCH /api/servers/:id`
- `GET /api/servers/:id/channels`
  - index of all channels belonging to a server
- `GET /api/servers/:id/users`
  - index of all users subscribing to a server


### Channels

- `POST /api/channels`
- `PATCH /api/channels/:id`
- `DELETE /api/channels/:id`
- `GET /api/channels/:id/messages`
  - index of all messages belonging to a channel

### Messages 

- `POST /api/messages`