import React from 'react';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let users = this.props.users;
    return (
      <div className='user-index-container'>
        <ul>
          {this.props.server.users.map(key => {
            return (
            <li className='user-index-item'>
              <div className='user-avatar-wrapper'>img placeholder</div>
              <div className='index-username'>{users[key].username}</div>
            </li>
            )}
          )}
        </ul>

      </div>
    );
  };
}


//////////////  CONTAINER ///////////
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({servers, users}, ownProps) => {
  return {
    server: servers[ownProps.match.params.serverId],
    users,
  };
};

// mapDispatchToProps = () => {
//   return {

//   };
// };

export default withRouter(connect(
  mapStateToProps
  // mapDispatchToProps
))(UserIndex);