import React from 'react';
import EditUserContainer from '../edit_user/edit_user';

class CurrentUser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let currentUser = this.props.currentUser;
    return (
      <div className='current-user-container'>
        <img className="current-user-avatar circle-base" src={currentUser.avatarUrl}/>
        <div className='current-user-name'>{currentUser.username}</div>
        <EditUserContainer />
      </div>
    );
  }
}

///////////// CONTAINER ///////////////
import {connect} from 'react-redux';

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser,
  }
}

export default connect(mapStateToProps)(CurrentUser);
