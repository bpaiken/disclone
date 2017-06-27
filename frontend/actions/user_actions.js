import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = ({ users }) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const patchUser = (user) => dispatch => {
  return APIUtil.patchUser(user)
  .then((user) => dispatch(receiveUsers(user)))
}


