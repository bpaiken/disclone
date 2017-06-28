import React from 'react';
import { Link } from 'react-router-dom';

class DirectIndexItem extends React.Component {
  constructor(props) {
    super(props)
  
  }

  render() {
      debugger
    if (Object.keys(this.props.users).length) {

      let users = this.props.users;
      let Img;
      let channel = this.props.channel;
      let channelUsers = this.props.channel.users;
      if (channelUsers.length > 2) {
        Img = () => (<i className="fa fa-users fa-lg" aria-hidden="true"></i>)
      } else {
        let friendId = channelUsers.filter(id => id !== this.props.currentUserId)[0]
        debugger
        Img = () => (<img src={users[friendId].avatarUrl} alt=""/>)
      }



    return (
      <div>
          <Img />
      </div>
    );
    } else {
      return null;
    }
  }
}

////////////  CONTAINER  //////////////
import { connect } from 'react-redux'

const mapStateToProps = ({ users }) => {
  return {
    users,
  }
}

export default connect(mapStateToProps)(DirectIndexItem);