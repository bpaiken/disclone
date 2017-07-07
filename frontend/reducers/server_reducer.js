import merge from 'lodash/merge';
import { RECEIVE_SERVER } from '../actions/server_actions'
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import { RECEIVE_CHANNELS } from '../actions/channel_actions'

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    
    case RECEIVE_SERVER:
      return merge(newState, action.response.server)

    case RECEIVE_CURRENT_USER:
      return merge(newState, action.servers)

    case RECEIVE_CHANNELS:
      return merge(newState, action.servers)
      
    default:
      return state;
  }
};