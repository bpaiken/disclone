import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FormReducer from './form_reducer'
import ServerReducer from './server_reducer'
import MessageReducer from './message_reducer'
import ChannelReducer from './channel_reducer'

const rootReducer = combineReducers({
  currentUser: SessionReducer,
  forms: FormReducer,
  servers: ServerReducer,
  messages: MessageReducer,
  channels: ChannelReducer,
});

export default rootReducer;