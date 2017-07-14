import React from 'react';
import moment from 'moment'

class MessageBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (    
        Object.keys(this.props.users).length && // check for empty users object
        this.props.messages[0] !== undefined    // check message block is not empty
        ) {

      let messages = this.props.messages;
      let userId = messages[0].userId
      let user = this.props.users[userId]
      let timestamp = moment(messages[0].createdAt).fromNow()
      return (
        <div className="message-block">
          <img src={user.avatarUrl} className='message-avatar circle-base'/>
          <div className='body'>
            <header>
              <div className="user-name">{user.username}</div>
              <div className="timestamp">{timestamp}</div>
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

/////////////////  CONTAINER  ///////////////////
import { connect } from 'react-redux';

const mapStateToProps = ({ users }) => {
  return {
    users,
  }
}

export default connect(mapStateToProps)(MessageBlock);
