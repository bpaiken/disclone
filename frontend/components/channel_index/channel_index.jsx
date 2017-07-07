import React from 'react';
import { connect } from 'react-redux';
import { fetchServer } from '../../actions/server_actions.js';
import {fetchMessages} from '../../actions/message_actions.js';
import { Link } from 'react-router-dom';
import CreateChannelContainer from '../channel_form/create_channel.jsx';
import EditChannelContainer from '../channel_form/edit_channel.jsx';
import CurrentUserContainer from '../current_user/current_user';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {}
  }

  render() {
    let serverId = this.props.match.params.serverId
    let servers = this.props.servers
    if (Object.keys(this.props.channels).length !== 0 && 
    this.props.channels[servers[serverId].channels[0]]) { //check if the channels in state is the right group of channels
      let channelArray = this.props.servers[serverId].channels
      return (
        <div className='channel-index'>
          <header className='server-header' >
            <span className='server-header-text'>{this.props.servers[serverId].name}</span>
            {/*<i className="fa fa-angle-down" aria-hidden="true"></i>*/}
          </header>

            <CreateChannelContainer />

          <ul>
            {channelArray.map((key) => (
            <li key={key} className='channel-name-wrapper'>
              <div className='channel-name-highlight'>
                <span id='hashtag'>#</span>  
                <Link to={`/app/channels/${serverId}/${key}`} className='channel-name'>
                {this.props.channels[key].name}</Link>
              </div>
                <EditChannelContainer channel={this.props.channels[key]}/>
            </li>
            ))}
          </ul>
          <CurrentUserContainer />
        </div>
      );
    }
    return null;
  } 
}

///////////////////////  CONTAINER  /////////////////////////////
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

