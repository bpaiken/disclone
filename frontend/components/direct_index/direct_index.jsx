import React from 'react';
import CurrentUserContainer from '../current_user/current_user';

class DirectIndex extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    // this.props.fetchDirects()
  }

  render() {
    let directs = this.props.currentUser.directs
    return (
     <div className='channel-index'>
          <header className='server-header' >
           directs placeholder
          </header>

          <ul>


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
const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

export default connect(
  mapStateToProps
)(DirectIndex);