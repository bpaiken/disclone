import merge from 'lodash/merge';
import { RECEIVE_SERVER } from '../actions/server_actions'

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  
  switch (action.type) {
    
    case RECEIVE_SERVER:
      return merge(newState, action.response.channels)
      
    default:
      return state;
  }
};