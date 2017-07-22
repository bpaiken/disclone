import React from 'react'
import { pusher } from '../../util/pusher.js'
import { Link } from 'react-router-dom'
import CreateChannelContainer from '../channel_form/create_channel.jsx'
import EditChannelContainer from '../channel_form/edit_channel.jsx'
import CurrentUserContainer from '../current_user/current_user'

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {}
  }

  componentDidMount() {

    let channel = pusher.subscribe('server'+ this.props.match.params.serverId);
    channel.bind('newChannel', (channel) => {
      this.props.dispatchChannel(channel)  
    })
  }

  render() {
    let serverId = this.props.match.params.serverId
    let servers = this.props.servers
    if (Object.keys(this.props.channels).length !== 0 && 
    this.props.channels[servers[serverId].channels[0]]) {
      let channelArray = this.props.servers[serverId].channels
      let currentChannel = Number(this.props.match.params.channelId)
      return (
        <div className='channel-index'>
          <header className='server-header' >
            <span className='server-header-text'>{this.props.servers[serverId].name}</span>
          </header>

            <CreateChannelContainer />

          <ul className='channel-list'>
            {channelArray.map((key) => {
              let selected = key === currentChannel ? 'selected-channel' : '' 
              return (
                <li key={key} className='channel-name-wrapper'>
                  <Link to={`/app/channels/${serverId}/${key}`} className=''>
                    <div className='channel-name-highlight' id={selected}>
                      <span id='hashtag'>#</span>  
                      <div className='channel-name'>
                        {this.props.channels[key].name}
                      </div>
                    </div>
                  </Link>
                  <EditChannelContainer channel={this.props.channels[key]}/>
                </li>
              )
            })}
          </ul>
          <CurrentUserContainer />
        </div>
      );
    }
    return null;
  } 
}

///////////////////////  CONTAINER  /////////////////////////////
import { connect } from 'react-redux'
import { fetchServer } from '../../actions/server_actions.js'
import { fetchMessages } from '../../actions/message_actions.js'
import { receiveChannels } from '../../actions/channel_actions.js'

const mapStateToProps = ({ servers, channels, currentUser }, { match })  => {
  return {
    servers,
    channels,
    currentUser,
    match, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    dispatchChannel: (channel) => dispatch(receiveChannels(channel))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex)

