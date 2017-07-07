import React from 'react';
import CurrentUserContainer from '../current_user/current_user';
import {Link} from 'react-router-dom';
import UserSearch from '../user_search/user_search'
import DirectIndexItem from './direct_index_item'

class DirectIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.fetchDirects().then(({currentUser}) => {
  //     Object.keys(currentUser.channels).each(channel => {
  //       this.props.fetchMessages(channel.id);
  //     })
  //   });
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId){
      this.props.fetchDirects()
    }
  }
  

  render() {
    if (this.props.channels && this.props.currentUser) {
    let directs = this.props.currentUser.directs
    let channels = this.props.channels
    return (
     <div className='channel-index'>
      
          <UserSearch /> 
          
          <ul>
          {directs.map((key) => (
            <Link key={key} to={`/app/directs/${key}`}>
            <li className='direct-link-wrapper'>
              <DirectIndexItem channel={channels[key]} className='direct-name'
              currentUserId={this.props.currentUser.id} /> 
            </li>
            </Link>
          ))}

          </ul>
          <CurrentUserContainer />
        </div>
    );
    } else {
      return null;
    }
  }
}

/////////////////////  CONTAINER ///////////////////////
import {connect} from 'react-redux';
import {fetchDirectChannels} from '../../actions/channel_actions.js'
import {fetchMessages} from '../../actions/message_actions.js'


const mapStateToProps = ({currentUser, channels}) => {
  return {
    currentUser,
    channels,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDirects: () => dispatch(fetchDirectChannels()),
    fetchMessages: (id) => dispatch(fetchMessages(id)), 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectIndex);