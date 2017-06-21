// import { connect } from 'react-redux';
// import MessageLog from './message_log';
// import { postMessage, fetchMessages } from '../../actions/message_actions.js'


// const mapStateToProps = (state, ownProps) => {
//   let id = 1 // test condition...will eventually get from ownprops match params
//   let message_array = state.channels[id].messages
//   let channelMessages = message_array.map((id) => {
//     return state.messages[id]
//   });
//   return {
//     channelId: 1, //test condition
//     messages: channelMessages.
//     ownProps,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     postMessage: (message) => dispatch(postMessage(message)),
//     fetchMessages: (id) => dispatch(fetchMessages(id)),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MessageLog)