import React from 'react'
import {connect} from 'react-redux'

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

export default connect(
  mapStateToProps,
  null
)(ServerIndex)