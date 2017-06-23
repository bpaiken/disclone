import React from 'react';
import { connect } from 'react-redux';
import { postMessage } from '../../actions/message_actions.js';
import { withRouter } from 'react-router-dom'

class MessageBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {body: ""}

    this.onMessage = this.onMessage.bind(this);
  }

  onMessage(e) {
    if (e.nativeEvent.keyCode != 13) return;

    let body = e.target.value
    if (body === "") return;
    let message = {
      body: body,
      userId: this.props.currentUser.id,
      channelId: this.props.match.params.channelId
    }
    this.props.postMessage(message);
  }

  render() {
    return (
      <div className="message-bar-container">
        <input onKeyPress={this.onMessage} 
          placeholder={`Message #${this.props.channel.name}`}
          className="message-bar-input"/>
      </div>
    );
  }
}


/////////////CONTAINER/////////////////

const mapStateToProps = ({ currentUser, channels }, ownProps) => {
  return {
    currentUser,
    ownProps,
    channel: channels[ownProps.match.params.channelId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  postMessage: (message) => dispatch(postMessage(message))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBar));