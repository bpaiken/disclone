import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    if (Object.keys(this.props.channels).length) {
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
      return null;
    }
  }
}

// export default Header;

///////////// CONTAINER ////////////////
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

const mapStateToProps= ({channels}) => {
  return {
    channels,
  }
}

export default connect(mapStateToProps, null)(Header);