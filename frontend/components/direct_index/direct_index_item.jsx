import React from 'react';
import { Link } from 'react-router-dom';

class DirectIndexItem extends React.Component {
  constructor(props) {
    super(props)
  
    this.channelUserNames = this.channelUserNames.bind(this);
  }

  channelUserNames() {
    let channel = this.props.channel;
    let channelUserArray = this.props.channel.users;
    let users = this.props.users;

    let usernames = channelUserArray.map(id => {
      return users[id].username
    })

    let text = usernames.join(', ').slice(0,37)
    return usernames.join(', ').length < 38 ? text : text + '...'
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
          <div className='group-message-control circle-base'>
          <i className="fa fa-users fa-lg circle-base group-message-icon" aria-hidden="true"></i>

          </div>
          <div className='direct-index-name'>{this.channelUserNames()}</div>
         </div>
       )
      } else if (channelUsers.length === 1) {
          return null;
          //TODO: take a look at/refactor...possible validation needed.
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