import React from 'react';
import { Link } from 'react-router-dom';

class DirectIndexItem extends React.Component {
  constructor(props) {
    super(props)
  
  }

  render() {
    if (Object.keys(this.props.users).length) {

      let users = this.props.users;
      let Item;
      let channel = this.props.channel;
      let channelUsers = this.props.channel.users;
      if (channelUsers.length > 2) {
       Item = () => (
         <div className='index-item-control'>
          <i className="fa fa-users fa-2x" aria-hidden="true"></i>
          <div></div>
         </div>
       )
      } else {
        let friendId = channelUsers.filter(id => id !== this.props.currentUserId)[0]
       Item = () => (
          <div className='index-item-control'>
            <img src={users[friendId].avatarUrl} alt=""/>
            <div className='direct-index-name'>{users[friendId].username}</div>
          </div>
          )
      }



    return (
      <div className='direct-index-item-wrapper'>
           <Item />
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