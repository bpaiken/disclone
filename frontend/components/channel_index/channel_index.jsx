import React from 'react';
import { connect } from 'react-redux';
import { fetchServer } from '../../actions/server_actions.js';
import {fetchMessages} from '../../actions/message_actions.js'
import { Link } from 'react-router-dom'

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
   
   this.state = {}
}

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId);
  }

   componentWillReceiveProps(nextProps) {
    if(this.props.match.params.serverId !== nextProps.match.params.serverId) {
    this.props.fetchServer(nextProps.match.params.serverId)
    }
  }

  render() {
    let serverId = this.props.match.params.serverId;
    if (Object.keys(this.props.channels).length !== 0) {
      let channelArray = this.props.servers[serverId].channels
      return (
        <div>
          <ul>
            {channelArray.map((key) => (
            <li>
            <Link to={`/app/channels/${serverId}/${key}`}>{this.props.channels[key].name}</Link>
            </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  } 
}

///////////////////////  CONTAINER  /////////////////////////////////

const mapStateToProps = ({ servers, channels }, { match })  => {
  return {
    servers,
    channels,
    match, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: (serverId) => dispatch(fetchServer(serverId)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex)
