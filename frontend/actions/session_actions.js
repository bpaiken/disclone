import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

//TODO: need to clear out more than current user on logout
const nullUser = { 
  currentUser: {
    id: null,
    username: "",
    servers: [],
    avatar_url: "",
    directs: [],
  } 
}

export const login = (user) => (dispatch) => {
    return APIUtil.login(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (error) => dispatch(receiveErrors(error)));
};

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(() => dispatch(receiveCurrentUser(nullUser)));
};

export const register = (user) => dispatch => {
  return APIUtil.register(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
  (error) => dispatch(receiveErrors(error)));
};

export const receiveCurrentUser = ({currentUser, messages, channels, servers, users}) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
    messages,
    channels,
    servers,
    users,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}
