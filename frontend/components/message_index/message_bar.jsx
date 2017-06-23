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
      <div>
        <input onKeyPress={this.onMessage} placeholder="your message here" />
      </div>
    );
  }
}


/////////////CONTAINER/////////////////

const mapStateToProps = ({ currentUser }, ownProps) => {
  return {
    currentUser,
    ownProps
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