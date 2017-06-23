import React from 'react';
import SkyLight from 'react-skylight';

class CreateChannel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      topic: "",
      serverId: this.props.match.params.serverId,
      nameErrors: "",
    };
    
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal() {
    this.refs.createChannel.show();
  }

  hideModal() {
    this.refs.createChannel.hide();
  }
  
  handleSubmit(e) {
    e.preventDefault();

    //handle errors here

    this.props.createChannel(this.state);
    this.hideModal();
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
          <div className='channel-header-wrapper' onClick={this.showModal}>
            <h3 className='channels-header'>text channels</h3>
            <i className="fa fa-plus add-channel-button" aria-hidden="true"></i>
         </div>

        <SkyLight className="create-channel-modal" hideOnOverlayClicked ref="createChannel">
          <form className='create-channel-form'>
            <h3 className="create-channel-header">create text channel</h3>
            
            <label htmlFor="create-channel-name">channel name</label>
            <input id="create-channel-name "type="text"
              onChange={this.update('name')}/>

            <label htmlFor="create-channel-topic">channel topic</label>
            <input id="create-channel-topic" type="text"
              onChange={this.update('topic')}/>

            <button onClick={this.handleSubmit} >Create Channel</button>
          </form>
        </SkyLight>
      </div>
    )
  }
}
//////////////  CONTAINER ///////////////////
import { connect } from 'react-redux'
import { createChannel } from '../../actions/channel_actions.js'
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ servers }, ownProps) => {
  return {
    server: servers[ownProps.match.params.serverId],
    servers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createChannel: (channel) => dispatch(createChannel(channel))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChannel));