import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';
import {RECEIVE_CHANNELS} from '../actions/channel_actions';
import {EDIT_USER} from '../actions/user_actions';

const initialState = {
    id: null,
    username: "",
    servers: [],
    directs: [],
  };

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let currentState = merge({}, state);
  switch (action.type) {
    
    case RECEIVE_CURRENT_USER:
      currentState.directs = [] // needed to clear out previous users directs on logout
      return merge(currentState, action.currentUser)

    case EDIT_USER: 
      return merge(currentState, action.currentUser)

    case RECEIVE_CHANNELS:
      return merge(currentState, action.currentUser)
    
    default:
      return state;
  }
};

export default sessionReducer;