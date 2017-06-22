import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    let servers = this.props.servers;
      return (
      <div>
          <div className="index-item-wrapper">
            {Object.keys(servers).map((key)=>
              <div key={key}>
                <Link to={`/app/channels/${key}/${servers[key].defaultId}`}>{servers[key].name}</Link>
              </div> )}
          </div>
          
          {/*<div className="add-server-button">
            add server button
          </div>*/}
          {/*TODO: Route for add server form*/}
      </div>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////
// container // 
const mapStateToProps = (state, ownProps) => {
  return {
    servers: state.servers,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
   
//   }
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(ServerIndex)