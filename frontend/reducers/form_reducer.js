import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const initialState = {
  session: { errors: [] },
  createServer: { errors: [] },
  createChannel: { errors: [] },
}


export default (state = initialState, action) => {
  Object.freeze(state); 
  let nextState = initialState
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
     return nextState.session.errors.concat(action.formErrors.session);
     
    default:
      return state;
  }
};