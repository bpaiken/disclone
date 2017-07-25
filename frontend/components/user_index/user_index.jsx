import React from 'react';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  //TODO: update to fetchUsers (should be users index action)
  componentDidMount() {
    if (this.props.match.params.serverId) {
      this.props.fetchServer(this.props.match.params.serverId);
    }
  }

  render () {
    let users = this.props.users;
    let userArray = [...new Set(this.props.server.users)]
    if (Object.keys(users).length > 0) { 
    return (
      <div className='user-index-container'>
        <div className='user-index-text'>MEMBERS - {Object.keys(users).length}</div>
        <ul className='user-index'>
          {userArray.map(key => {
            let onlineStatus = users[key].online ? 'online' : 'offline' 
            return (
            <li key={key} className='user-index-item'>
            <div className={`onlineStatus ${onlineStatus}`}></div>
              <div className='user-avatar-wrapper circle-base'>
                <img className="circle-base" src={users[key].avatarUrl} alt=""/>
              </div>
              <div className="index-username-control">
                <span className='index-username'>{users[key].username}</span>
              </div>
            </li>
            )}
          )}
        </ul>
      </div>
    );
    } else return null;
  };
}


//////////////  CONTAINER ///////////
import { connect } from 'react-redux'
import { fetchServer } from '../../actions/server_actions.js'


const mapStateToProps = ({ servers, users }, ownProps) => {
  return {
    server: servers[ownProps.match.params.serverId],
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(UserIndex)