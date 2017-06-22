import React from 'react'
import {connect} from 'react-redux'
import {createServer} from '../../actions/server_actions.js';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
    <div>
      {this.props.servers.map((server)=><div>{server.name}</div> )}
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