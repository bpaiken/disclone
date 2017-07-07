import React from 'react';
import EditUserContainer from '../edit_user/edit_user';

class CurrentUser extends React.Component {
  constructor(props) {
    super(props)

    this.logout = this.props.logout.bind(this);
  }

  logout() {
    this.props.logout()
  }

  render() {
    let currentUser = this.props.currentUser;
    return (
      <div className='current-user-container'>
        <img className="current-user-avatar circle-base" src={currentUser.avatarUrl}/>
        <div className='current-user-name'>{currentUser.username}</div>
        <div className ='logout' onClick={this.logout}>LOGOUT</div>
        <EditUserContainer />
      </div>
    );
  }
}

///////////// CONTAINER ///////////////
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js';
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
(CurrentUser);
