import merge from 'lodash/merge';
import {RECEIVE_ERRORS} from '../actions/session_actions';

const initialState = {
  sessionErrors: [] ,
  createServerErrors: [],
  createChannel: [],
};


export default (state = initialState, action) => {
  Object.freeze(state); 
  // let nextState = merge({}, state);
  // debugger
  switch (action.type) {
    case RECEIVE_ERRORS:
     return state.sessionErrors.concat(action.errors.responseJSON.formErrors.session);
     
    default:
      return state;
  }
};