import React from 'react';
import {Link} from 'react-router-dom';

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = { status: "hide" }
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }

  hide() {
    this.setState({status: "hide"})
  }

  show() {
    this.setState({status: "show"})
  }

  render() {
    return (
      <div>
        <Link to={`/app/channels/${this.props.server.id}/${this.props.server.defaultId}`}>
          <img className='server-avatar' src={this.props.server.avatarUrl}
          onMouseEnter={this.show} onMouseLeave={this.hide}/>
        </Link>
        <div className={this.state.status} >{this.props.server.name}</div>
      </div>
    );
  }
}
export default ServerIndexItem;

/////////// CONTAINER /////////////
// import { withRouter } from 'react-router-dom'

// const mapStateToProps = (state, ownProps) => {
//   return {
//     servers: state.servers,
//   };
// };


// export default connect(
//   mapStateToProps
// )(ServerIndexItem)