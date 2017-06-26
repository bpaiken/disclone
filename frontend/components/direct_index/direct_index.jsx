import React from 'react';

class DirectIndex extends React.Component {
  constructor(prop) {
    super(props)

  }

  componentDidMount() {
    // this.props.fetchDirects()
  }

  render() {
    return (
      <div>
        
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