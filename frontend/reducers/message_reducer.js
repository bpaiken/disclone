import merge from 'lodash/merge';
import { RECEIVE_MESSAGES } from '../actions/message_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)  
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return merge(newState, action.messages.messages)
    default:
      return state;
  }
};