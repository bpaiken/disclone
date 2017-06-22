import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/message_actions.js'

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
   
  this.state = {}
}

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
    this.props.fetchMessages(nextProps.match.params.channelId)
    }
  }

  render() {
    let channelId = this.props.match.params.channelId
    if (this.props.channels[channelId]) {
      let messageArray = this.props.channels[channelId].messages
      
      return (
      <div>
          <ul>
            {messageArray.map((key) => (
            <li>{this.props.messages[key].body}</li>
            ))}
          </ul>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex)
