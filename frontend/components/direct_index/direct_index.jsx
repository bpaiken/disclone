import React from 'react'
import CurrentUserContainer from '../current_user/current_user'
import {Link} from 'react-router-dom';
import UserSearch from '../user_search/user_search'
import DirectIndexItem from './direct_index_item'
import { pusher } from '../../util/pusher.js'

class DirectIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let channel = pusher.subscribe('user'+ this.props.currentUser.id.toString());
    channel.bind('newChannel', (channel) => {
      this.props.dispatchChannel(channel)  
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId){
      this.props.fetchDirects()
    }
  }
  

  render() {
    if (this.props.channels && this.props.currentUser) {
    let directs = this.props.currentUser.directs
    let channels = this.props.channels
    let currentChannel = Number(this.props.location.pathname.split('/app/directs/')[1])
    return (
     <div className='channel-index'>
      
          <UserSearch /> 
          
          <ul className='channel-list'>
          {directs.map((key) => {
            let selected = key === currentChannel ? 'selected-direct' : ''
            return (
            <Link key={key} to={`/app/directs/${key}`}>
              <li className='direct-link-wrapper' id={selected}>
                <DirectIndexItem channel={channels[key]} className='direct-name'
                currentUserId={this.props.currentUser.id} selected={selected} /> 
              </li>
            </Link>
            )
          })}

          </ul>
          <CurrentUserContainer />
        </div>
    );
    } else {
      return null
    }
  }
}

/////////////////////  CONTAINER ///////////////////////
import {connect} from 'react-redux';
import {fetchDirectChannels} from '../../actions/channel_actions.js'
import {fetchMessages} from '../../actions/message_actions.js'
import { receiveChannels } from '../../actions/channel_actions.js'


const mapStateToProps = ({currentUser, channels}) => {
  return {
    currentUser,
    channels,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDirects: () => dispatch(fetchDirectChannels()),
    fetchMessages: (id) => dispatch(fetchMessages(id)),
    dispatchChannel: (channel) => dispatch(receiveChannels(channel))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectIndex)