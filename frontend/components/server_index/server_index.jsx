import React from 'react'
import {connect} from 'react-redux'
import {createServer} from '../../actions/server_actions.js';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  addServer() {
    
  }

  render() {
    return (
    <div>

        <div className="index-item-wrapper">
          {this.props.servers.map((server)=><div>{server.name}</div> )}
        </div>
        
        <div className="add-server-button">
          add server button
        </div>


        {/*Route for add server form*/}
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    servers: state.currentUser.servers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createServer: (server) => dispatch(createServer(server)), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerIndex)