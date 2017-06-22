import React from 'react'
import {connect} from 'react-redux'

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    debugger
    let servers = this.props.servers;
      return (
      <div>

          <div className="index-item-wrapper">
            {Object.keys(servers).map((key)=><div>{servers[key].name}</div> )}
          </div>
          
          <div className="add-server-button">
            add server button
          </div>

          {/*TODO: Route for add server form*/}
      </div>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////
// container // 
const mapStateToProps = (state) => {
  return {
    servers: state.servers
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