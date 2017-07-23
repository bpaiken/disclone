import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ServerIndexItem from './server_name'
import { pusher } from '../../util/pusher.js'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.getServerId = this.getServerId.bind(this)
  }

  componentDidMount() {
    let channel = pusher.subscribe('users')
    channel.bind('newUser', (user) => {
      this.props.receiveUser(user)
    })
  }

  getServerId() {
    let regex = /\d+/g
    let location = this.props.location.pathname
    return location.match(regex)[0]
  }
  
  render() {
    let servers = this.props.servers;
    let serverId = this.props.location.pathname.includes('channels') ? this.getServerId() : ''
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
            {Object.keys(servers).map(key => {
              let selected = key === serverId ? 'selected-server' : ''
              return (
                <ServerIndexItem className='server-index-item' 
                key={key} server={servers[key]} selected={selected}/>
              ) 
            })}
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
import { withRouter } from 'react-router-dom'

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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar))