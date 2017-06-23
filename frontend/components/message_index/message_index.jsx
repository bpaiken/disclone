import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/message_actions.js';
import MessageBarContainer from './message_bar';
import { fetchServer } from '../../actions/server_actions.js'

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.pusher = new Pusher('05f19b135aba7470dff0', {
      cluster: 'us2',
      encrypted: true
    });
   
  this.state = {}
}

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId);
    Pusher.logToConsole = true;
 
    let channel = this.pusher.subscribe(this.props.match.params.channelId.toString());
    channel.bind('post_message', (data) => {
      this.props.fetchMessages(this.props.match.params.channelId)
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
    this.props.fetchMessages(nextProps.match.params.channelId)

    this.pusher.unsubscribe(this.props.match.params.channelId.toString()) // unsubscribe from previous channel
    let channel =  this.pusher.subscribe(nextProps.match.params.channelId.toString()); //subscribe to new channel
    channel.bind('post_message', (data) => {
     this.props.fetchMessages(this.props.match.params.channelId)
   })
    }
  }

  render() {
    let channelId = this.props.match.params.channelId
    if (this.props.channels[channelId]) {
      let messageArray = this.props.channels[channelId].messages
      return (
      <div className='message-index-wrapper'>

        <ul>
            {messageArray.map((key) => (
          <div className='message-group'>
            <li>{this.props.messages[key].body}</li>
          </div>
            ))}
        </ul>
        <MessageBarContainer />
      </div>
      );
    }
    return null;
  }
}

///////////////////////  CONTAINER  /////////////////////////////////

const mapStateToProps = ({ messages, channels },{ match })  => {
  return {
    messages,
    channels,
    match,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex)
