import React from 'react';
import { connect } from 'react-redux';
import { fetchServer } from '../../actions/server_actions.js';
import {fetchMessages} from '../../actions/message_actions.js';
import { Link } from 'react-router-dom';
import CreateChannelContainer from '../channel_form/create_channel.jsx';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
   
  this.state = {}
}

  //don't think this is needed...user index seems to mount befor for channel index...so called in user index
  // componentDidMount() {
  //   this.props.fetchServer(this.props.match.params.serverId);
  // }

   

  render() {
    let serverId = this.props.match.params.serverId;
    if (Object.keys(this.props.channels).length !== 0) {
      let channelArray = this.props.servers[serverId].channels
      return (
        <div className='channel-index'>
          <div className='server-header' >
            options placeholder
          </div>

            <CreateChannelContainer />

          <ul>
            {channelArray.map((key) => (
            <li className='channel-name-wrapper'>
              <div className='channel-name-highlight'>
                <span id='hashtag'>#</span>  
                <Link to={`/app/channels/${serverId}/${key}`} className='channel-name'>
                {this.props.channels[key].name}</Link>
              </div>
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

