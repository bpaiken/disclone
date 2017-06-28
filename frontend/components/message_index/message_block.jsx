import React from 'react';

class MessageBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchServer(this.props.serverId)
  // }

  render() {
    if (this.props.messages.length && Object.keys(this.props.users).length && 
        this.props.messages[0] !== undefined) {
      let messages = this.props.messages;
      let userId = messages[0].userId
      let user = this.props.users[userId]
      return (
        <div className="message-block">
          <img src={user.avatarUrl} className='message-avatar circle-base'/>
          <div className='body'>
            <header>
              <div className="user-name">{user.username}</div>
              <div className="timestamp">{messages[0].createdAt}</div>
            </header>
            {messages.map(message => <div key={message.id} className="message-body">{message.body}</div>)}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

import { connect } from 'react-redux';

const mapStateToProps = ({ users }) => {
  return {
    users,
  }
}

export default connect(mapStateToProps)(MessageBlock);
