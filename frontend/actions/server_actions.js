import * as APIUtil from '../util/server_api_util';
export const RECEIVE_SERVER = 'RECEIVE_SERVER'

export const receiveServer = (response) => {
  return {
    type: RECEIVE_SERVER,
    response
  }
}

export const fetchServer = (id) => (dispatch) => {
  return APIUtil.fetchServer(id)
  .then((server) => dispatch(receiveServer(server)));
};

export const createServer = (server) => dispatch => {
  return APIUtil.createServer(server)
  .then((server) => dispatch(receiveServer(server)));
}