import * as APIUtil from '../util/server_api_util';
export const RECEIVE_SERVER = 'RECEIVE_SERVER'

export const receiveServer = (server) => {
  return {
    type: RECEIVE_SERVER,
    server
  }
}

export const fetchServer = (id) => (dispatch) => {
  return APIUtil.fetchServer(id)
  .then((server) => dispatch(receiveServer(server)));
};
