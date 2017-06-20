import merge from 'lodash/merge';
import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/session_actions';

const initialState = {
  sessionErrors: [] ,
  ServerErrors: [],
  ChannelErrors: [],
};

export default (state = initialState, action) => {
  Object.freeze(state); 
  let nextState = merge({}, state);
  // debugger
  switch (action.type) {
    case RECEIVE_ERRORS:
    nextState.sessionErrors = action.errors.responseJSON.formErrors.session ;
     return nextState;

    case CLEAR_ERRORS:
    return initialState;
     
    default:
      return state;
  }
};