// import RECEIVE_USERS from '../actions/user_actions';
import merge from 'lodash/merge';
import { RECEIVE_SERVER } from '../actions/server_actions';
import { RECEIVE_MESSAGES } from '../actions/message_actions';
import { RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CHANNELS } from '../actions/channel_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_SERVER:
      return merge(newState, action.response.users)

    case RECEIVE_MESSAGES:
      return merge(newState, action.users)

    case RECEIVE_USERS:
      return merge(newState, action.users)

    case RECEIVE_CHANNELS:
      return merge(newState, action.channels)  

    default:
      return state;
  }
};