import React from 'react';
import CurrentUserContainer from '../current_user/current_user';
import {Link} from 'react-router-dom';
import UserSearch from '../user_search/user_search'
import DirectIndexItem from './direct_index_item'

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
            <li key={key} className='channel-name-wrapper'>
            <Link to={`/app/directs/${key}`} className='channel-name'>
              <DirectIndexItem channel={channels[key]} currentUserId={this.props.currentUser.id} /> 
            </Link>
            </li>
          ))}

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