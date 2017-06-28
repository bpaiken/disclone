import * as APIUtil from '../util/channel_api_util';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'


export const receiveChannels = ({ channels, currentUser, messages }) => {
  return {
    type: RECEIVE_CHANNELS,
    channels,
    currentUser,
    messages,
  }
}

export const createChannel = channel => dispatch => {
  return APIUtil.createChannel(channel)
  .then((channel) => dispatch(receiveChannels(channel)))
};

export const createDirect = channel => dispatch => {
  return APIUtil.createDirect(channel)
  .then((channel) => dispatch(receiveChannels(channel)))
};

export const patchChannel = channel => dispatch => {
  return APIUtil.patchChannel(channel)
  .then((channel) => dispatch(receiveChannels(channel)))
};

// export const fetchChannels = serverId => dispatch => {
//   return APIUtil.fetchChannels(serverId)
//   .then((response) => dispatch(receiveChannels(response)));
// };

export const fetchDirectChannel = () => dispatch => {
  return APIUtil.fetchDirects() 
  .then((channels) => dispatch(receiveChannels(channels)))
}