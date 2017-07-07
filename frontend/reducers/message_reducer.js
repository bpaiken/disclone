import merge from 'lodash/merge';
import { RECEIVE_MESSAGES } from '../actions/message_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)  
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return merge(newState, action.messages)

    case RECEIVE_CURRENT_USER:
      return merge(newState, action.messages)  
    default:
      return state;
  }
};