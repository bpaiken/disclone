import merge from 'lodash/merge';
import { RECEIVE_MESSAGES } from '../actions/message_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)  
  switch (action.type) {
    case RECEIVE_MESSAGES:
    debugger
      return merge(newState, action.messages)
    default:
      return state;
  }
};