import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ServerIndexItem from './server_name'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
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
const mapStateToProps = (state) => {
  return {
    servers: state.servers,
  };
};

export default connect(
  mapStateToProps
)(Sidebar)