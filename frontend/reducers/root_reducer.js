import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FormReducer from './form_reducer'
import ServerReducer from './server_reducer'
import MessageReducer from './message_reducer'
import ChannelReducer from './channel_reducer'
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
  currentUser: SessionReducer,
  forms: FormReducer,
  servers: ServerReducer,
  users: UserReducer,
  messages: MessageReducer,
  channels: ChannelReducer,
});

export default rootReducer;