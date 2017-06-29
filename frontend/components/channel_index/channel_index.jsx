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

  // don't think this is needed...user index seems to mount befor for channel index...so called in user index
  // comp

  // componentDidMount() {
  //   this.props.fetchServer(this.props.match.params.serverId)
  // }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.serverId !== nextProps.match.params.serverId || 
    Object.keys(this.props.channels) < Object.keys(nextProps.channels)) {
    this.props.fetchServer(nextProps.match.params.serverId)
    //todo fetch channel action
    }
  }

  render() {
    // debugger
    let serverId = this.props.match.params.serverId;
    if (Object.keys(this.props.channels).length !== 0) {
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

