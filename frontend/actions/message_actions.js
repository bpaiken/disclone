import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export const receiveMessages = ({messages,channels}) => {
  return {
    type: RECEIVE_MESSAGES,
    messages,
    channels,
  }
}

//DONT THINK I NEED THIS
// export const createMessage = (message) => {
//   return { 
//     type: CREATE_MESSAGE,
//     message
//   }
// } 

export const postMessage = (message) => dispatch => {
  return APIUtil.postMessage(message)
  .then((message) => dispatch(receiveMessages(message)))
}

export const fetchMessages = (id) => dispatch => {
  return APIUtil.fetchMessages(id)
  .then((messages) => dispatch(receiveMessages(messages)));
};