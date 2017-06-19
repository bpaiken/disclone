import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  currentUser: sessionReducer,
});

export default rootReducer;