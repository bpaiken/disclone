import React from 'react';
import CurrentUserContainer from '../current_user/current_user';
import {Link} from 'react-router-dom';
import UserSearch from '../user_search/user_search'

class DirectIndex extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    // this.props.fetchDirects()
  }

  render() {
    let directs = this.props.currentUser.directs
    let channels = this.props.channels
    return (
     <div className='channel-index'>
      
          <UserSearch /> 
          <ul>
          {directs.map(key => (
            <li className='channel-name-wrapper'>
            <Link key={key} to={`/app/directs/${key}`} className='channel-name'>
            <img src="" alt=""/>
            <div>channel name</div>
            </Link>
            </li>
          ))}

            {/*{channelArray.map((key) => (
            <li key={key} className='channel-name-wrapper'>
              <div className='channel-name-highlight'>
                <span id='hashtag'>#</span>  
                <Link to={`/app/channels/${serverId}/${key}`} className='channel-name'>
                {this.props.channels[key].name}</Link>
              </div>
                <EditChannelContainer channel={this.props.channels[key]}/>
            </li>
            ))}*/}
          </ul>
          <CurrentUserContainer />
        </div>
    );
  }

}


///////////  CONTAINER /////////////

import {connect} from 'react-redux';

// might need alot of state since this is initial component
const mapStateToProps = ({currentUser, channels}) => {
  return {
    currentUser,
    channels,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

export default connect(
  mapStateToProps
)(DirectIndex);