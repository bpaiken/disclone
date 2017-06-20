import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
    id: null,
    username: "",
    servers: [],
    avatar_url: ""
  };

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let currentState = merge({}, state);
  switch (action.type) {
    
    case RECEIVE_CURRENT_USER:
      currentState = action.user;
      return currentState;
    
      // NEED FORMS REDUCER FOR ERRORS?
    // case RECEIVE_ERRORS:
    //   currentState.errors = action.errors;
    //   return currentState;
    
    default:
      return state;
  }
};

export default sessionReducer;