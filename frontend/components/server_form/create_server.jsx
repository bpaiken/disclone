import React from 'react'
import { createServer } from '../../actions/server_actions.js'
import { connect } from 'react-redux'


class CreateServer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "" };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {
    this.props.createServer(this.state)
}

  update(field) {
    return (e) => {
      this.setState({
      [field]: e.currentTarget.value
    });
  };
}

 render() {
   return (
      <div>
        <h3>create your server</h3>
        <span>server name</span>
        <div className='input-avatar-wrapper'>
          <input className='create-server-input' type="text"
            onChange={this.update('name')}
            value={this.state.name}/>
          <button>add avatar placeholder</button>
        </div>
        <div>
          <span>Back</span>
          <button onClick={this.handleSubmit}>Create</button>
        </div>
      </div>
    );
  } 
}


const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    ownProps: ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createServer: (server) => dispatch(createServer(server))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(CreateServer)