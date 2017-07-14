import React from 'react';
import { connect } from 'react-redux';
import { postMessage } from '../../actions/message_actions.js';
import { withRouter } from 'react-router-dom'

class MessageBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {body: ""}

    this.onMessage = this.onMessage.bind(this);
    this.update = this.update.bind(this);
  }

  onMessage(e) {
    e.preventDefault();
    if (this.state.body === "") return;
    let message = {
      body: this.state.body,
      userId: this.props.currentUser.id,
      channelId: this.props.match.params.channelId
    }
    this.props.postMessage(message)
    this.setState({ body: "" })
  }

  update(e) {
      this.setState({ body: e.currentTarget.value });
    }
  
  render() {
    if (this.props.channel) {

      return (
        <div className="message-bar-control">
          <form className="message-bar-container" onSubmit={this.onMessage}>
          <input onChange={this.update}
            value={this.state.body}
            placeholder={`Message #${this.props.channel.name}`}
            className="message-bar-input"/>
          </form>
        </div>
      );
    } else {
      return null;
    }
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