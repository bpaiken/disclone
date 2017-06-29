import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const EDIT_USER = 'EDIT_USER';

export const receiveUsers = ({ users, currentUser }) => {
  return {
    type: RECEIVE_USERS,
    users,
    currentUser
  };
};

export const editUser = ({ users, currentUser }) => {
  return {
    type: EDIT_USER,
    users,
    currentUser
  };
}


export const patchUser = (user, id) => dispatch => {
  return APIUtil.patchUser(user, id)
  .then((user) => dispatch(editUser(user)));
};

export const fetchAllUsers = () => dispatch => {
  return APIUtil.fetchAllUsers()
  .then(users => dispatch(receiveUsers(users)));
};

