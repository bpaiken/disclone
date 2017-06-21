import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export const receiveMesssages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  }
}

//DONT THINK I NEED THIS
// export const createMessage = (message) => {
//   return { 
//     type: CREATE_MESSAGE,
//     message
//   }
// } 

export const postMessage = (message) => {
  return APIUtil.postMessage(message)
  .then((message) => dispatch(recieveMessages(message)))
}

export const fetchMessages = (id) => dispatch => {
  return APIUtil.fetchMessages(id)
  .then((messages) => dispatch(receiveMesssages(messages)));
};