import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    if (Object.keys(this.props.channels).length &&
      Object.keys(this.props.match.params).length) {
      
    let channelId = this.props.match.params.channelId;
    let channel = this.props.channels[channelId]
    let channelName = channel ? channel.name : "????";
    let channelTopic = channel ? channel.topic : "maurice what should i put here"
    return (
      <div className="header">
        <div className="header-name">{channelName}</div>
        <div className="header-topic">{channelTopic}</div>
        <div className='member-toggle'>
          <i className="fa fa-users fa-lg" aria-hidden="true"></i>
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

const mapStateToProps= ({channels, currentUser}) => {
  return {
    channels,
    username: currentUser.username
  }
}

export default connect(mapStateToProps, null)(Header);