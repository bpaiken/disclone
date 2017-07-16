import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ServerIndexItem from './server_name'
import { pusher } from '../../util/pusher.js'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let channel = pusher.subscribe('users')
    channel.bind('newUser', (user) => {
      this.props.receiveUser(user)
    })
  }
  

  render() {
    let servers = this.props.servers;
      return (
        <div className='sidebar-wrapper'>
        
            <Link to="/app/directs" className='direct-message-link circle-base'>
          <div className='direct-message-button'>
          <i className="fa fa-user-o fa-2x" aria-hidden="true"></i>
          </div>
            </Link>
            
          <span className='sidebar-text'>Direct Messages</span>
          <div className='sidebar-control'></div>
          <span className='sidebar-text'>Servers</span>
         
          <ul className="index-item-wrapper">
            {Object.keys(servers).map((key)=>
              <ServerIndexItem className='server-index-item'
               key={key} server={servers[key]}/>
            )}
          </ul>

          <div className="add-server-button circle-base">
            <div id='add-server-plus'>+</div>
          </div>
          {/*TODO: Route for add server form*/}
        </div>
    );
  }
}

////////////////// CONTAINER /////////////////////////
import { receiveUsers } from '../../actions/user_actions.js'

const mapStateToProps = (state) => {
  return {
    servers: state.servers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveUser: (user) => dispatch(receiveUsers(user)), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)