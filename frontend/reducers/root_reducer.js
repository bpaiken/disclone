import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FormReducer from './form_reducer'
import ServerReducer from './server_reducer'
import MessageReducer from './message_reducer'

const rootReducer = combineReducers({
  currentUser: SessionReducer,
  forms: FormReducer,
  servers: ServerReducer,
  messages: MessageReducer
});

export default rootReducer;