import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/message_actions.js';
import MessageBarContainer from './message_bar';
import {fetchServer} from '../../actions/server_actions.js'

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
   
  this.state = {}
}

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId);
    Pusher.logToConsole = true;

    var pusher = new Pusher('05f19b135aba7470dff0', {
      cluster: 'us2',
      encrypted: true
    });
    let that = this;
  var channel = pusher.subscribe('channel_' + this.props.match.params.channelId);
    channel.bind('post_message', (data) => {
      this.props.fetchMessages(this.props.match.params.channelId)
      .then(() => this.props.fetchServer(this.props.match.params.serverId));
    });

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      var pusher = new Pusher('05f19b135aba7470dff0', {
      cluster: 'us2',
      encrypted: true
    });
    let that = this;
  var channel = pusher.subscribe('channel_' + this.props.match.params.channelId);
    channel.bind('post_message', (data) => {
      this.props.fetchMessages(this.props.match.params.channelId)
      .then(() => this.props.fetchServer(this.props.match.params.serverId));
    });
    this.props.fetchMessages(nextProps.match.params.channelId)
    }
  }

  render() {
    let channelId = this.props.match.params.channelId
    if (this.props.channels[channelId]) {
      let messageArray = this.props.channels[channelId].messages
      debugger
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
