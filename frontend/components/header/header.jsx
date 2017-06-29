import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.headerName = this.headerName.bind(this);
    this.headerTopic - this.headerTopic.bind(this);
  }

  headerName() {
    let channelId = this.props.match.params.channelId;
    let channel = this.props.channels[channelId]
    if (channel.direct) {
      let channelUserArray = channel.users
      let users = this.props.users
      let usernames = channelUserArray.map(id => users[id].username)
      let text = usernames.join(', ').slice(0,80)
      return usernames.join(', ').length < 81 ? text : text + '...'
    } else {
      return channel.name
    }
  }

  headerTopic() {
    let channelId = this.props.match.params.channelId;
    let channel = this.props.channels[channelId]
    if (channel.direct) {
      return ""
    }
    return channel.topic
  }


  render() {
    if (Object.keys(this.props.channels).length &&
      Object.keys(this.props.match.params).length &&
      Object.keys(this.props.users).length) {
    
    //TODO: refactor  
    let channelId = this.props.match.params.channelId;
    let channel = this.props.channels[channelId]
    let channelName = channel ? channel.name : "????";
    let channelTopic = channel ? channel.topic : "maurice what should i put here"
    return (
      <div className="header">
        <div className="header-name">{this.headerName()}</div>
        <div className="header-topic">{this.headerTopic()}</div>
        <div className='member-toggle'>
          {/*<i className="fa fa-users fa-lg" aria-hidden="true"></i>*/}
        </div>
      </div>
    );
    } else {
      return (
        <div className="header">
          <div className="header-name welcome">Welcome Back</div>
            <div className='welcome-username'>{this.props.username}</div>
            <div className="header-topic">Let's Get Started</div>
          <div className="header-topic"></div>
          
        </div>
      )
    }
  }
}

// export default Header;

///////////// CONTAINER ////////////////
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

const mapStateToProps= ({channels, currentUser, users}) => {
  return {
    channels,
    username: currentUser.username,
    users,
  }
}

export default connect(mapStateToProps, null)(Header);