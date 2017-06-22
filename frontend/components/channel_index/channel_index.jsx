import React from 'react';
import { connect } from 'react-redux';
import { fetchServer } from '../../actions/server_actions.js';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
   
   this.state = {}
}

componentDidMount() {
  this.props.fetchServer(this.props.match.params.serverId);
}
  render() {
    let channels = this.props.channels;
    return (
      <div>
        <ul>
          {Object.keys(channels).map((key) => (
          <li>{channels[key].name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

///////////////////////  CONTAINER  /////////////////////////////////

const mapStateToProps = ({ servers, channels }, { match })  => {
  return {
    servers,
    channels,
    match, 
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: (serverId) => dispatch(fetchServer(serverId)), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex)
