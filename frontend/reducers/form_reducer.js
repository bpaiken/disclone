import merge from 'lodash/merge';
import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/session_actions';

const initialState = {
  sessionErrors: [] ,
  serverErrors: [],
  channelErrors: [],
};

export default (state = initialState, action) => {
  Object.freeze(state); 
  let nextState = merge({}, state);
    switch (action.type) {
    
    case RECEIVE_ERRORS:
      nextState.sessionErrors = []
      nextState.sessionErrors.push(action.errors.responseJSON);
      return nextState; 

    case CLEAR_ERRORS:
      return initialState;
     
    default:
      return state;
  }
};