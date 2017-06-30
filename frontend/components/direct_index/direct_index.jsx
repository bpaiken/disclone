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
    if (this.props.currentUser) {
    //TODO: currentUser slice of state holds channels...refactor this
    let directs = this.props.currentUser.directs
    let channels = this.props.currentUser.channels

    return (
     <div className='channel-index'>
      
          <UserSearch /> 
          
          <ul>
          {directs.map(key => (
            <Link to={`/app/directs/${key}`}>
            <li key={key} className='direct-link-wrapper'>
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

///////////  CONTAINER /////////////
import {connect} from 'react-redux';

// might need alot of state since this is initial component
const mapStateToProps = ({currentUser}) => {
  return {
    currentUser,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchDirects: 
//   };
// };

export default connect(
  mapStateToProps
)(DirectIndex);