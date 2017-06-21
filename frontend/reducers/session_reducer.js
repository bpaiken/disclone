import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
    id: null,
    username: "",
    servers: [],
  };

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let currentState = merge({}, state);
  switch (action.type) {
    
    case RECEIVE_CURRENT_USER:
      // currentState = action.currentUser;
      // return currentState;
      return merge(currentState, action.currentUser)
    
    // case RECEIVE_ERRORS:
    //   currentState.errors = action.errors;
    //   return currentState;
    
    default:
      return state;
  }
};

export default sessionReducer;