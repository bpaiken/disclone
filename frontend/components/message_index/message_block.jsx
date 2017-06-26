import React from 'react';

class MessageBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let messages = this.props.messages;
    let user = this.props.users[messages[0].userId]
    return (
      <div className="message-block">
        <img src={user.avatarUrl} className='message-avatar circle-base'/>
        <div className='body'>
          <header>
            <div className="user-name">{user.username}</div>
            <div className="timestamp">{messages[0].createdAt}</div>
          </header>
          {messages.map(message => <div className="message-body">{message.body}</div>)}
        </div>
      </div>
    );
  }
}

import { connect } from 'react-redux';

const mapStateToProps = ({ users }) => {
  return {
    users,
  }
}

export default connect(mapStateToProps)(MessageBlock);
