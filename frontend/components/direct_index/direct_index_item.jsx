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
    if (Object.keys(this.props.users).length &&
        this.props.channel &&
        Object.keys(this.props.channel).length) {

      let users = this.props.users;
      let Item;
      let channel = this.props.channel;
      let channelUsers = this.props.channel.users;
      let selected = this.props.selected === '' ? '' : 'selected-name'
      
      if (channelUsers.length > 2) {
       Item = () => (
         <div className='index-item-control'>
          <div className='group-message-control circle-base'>
            <i className="fa fa-users fa-lg circle-base group-message-icon" aria-hidden="true"></i>
          </div>
          <div className='group-index-name' id={selected}>{this.channelUserNames()}</div>
         </div>
       )

      } else if (channelUsers.length === 1) {
          return null;
          //TODO: take a look at/refactor...possible validation needed.
      } else {
        let friendId = channelUsers.filter(id => id !== this.props.currentUserId)[0]
        let onlineStatus = users[friendId].online ? 'online' : 'offline'
        Item = () => (
          <div className='index-item-control'>
            <div className={`direct-onlineStatus ${onlineStatus}`}></div>
            <img className='.circle-base' src={users[friendId].avatarUrl} alt=""/>
            <div className='direct-index-name' id={selected}>{users[friendId].username}</div>
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