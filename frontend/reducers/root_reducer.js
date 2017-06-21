import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FormReducer from './form_reducer'
import ServerReducer from './server_reducer'


const rootReducer = combineReducers({
  currentUser: SessionReducer,
  forms: FormReducer,
  servers: ServerReducer,
});

export default rootReducer;