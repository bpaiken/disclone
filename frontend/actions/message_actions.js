import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'

export const receiveMesssages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  }
}

export const fetchMessages = () => dispatch => {
  return APIUtil.fetchMessages(id)
  .then((messages) => dispatch(receiveMesssages(messages)));
};