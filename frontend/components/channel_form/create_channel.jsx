import React from 'react';
import { pusher } from '../../util/pusher.js'

class CreateChannel extends React.Component {
  constructor(props){
    super(props);
    
    this.state = { 
        name: "",
        topic: "",
        serverId: this.props.match.params.serverId,
        nameErrors: "",
        modal: {
          modalId: "closed",
          overlayId: "closed"
        }
    };
    
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({ modal: 
      { 
        modalId: 'create-channel-modal', 
        overlayId: 'create-channel-overlay'
      } 
    });
  }
    
  closeModal(e) {
    this.setState(
      { 
        name: "",
        topic: "",
        modal: { modalId: 'closed', overlayId: 'closed'} 
      })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    pusher.unsubscribe(this.props.match.params.channelId.toString())
    let state = this.state;
    state.serverId = this.props.match.params.serverId
    this.props.createChannel(state)
    .then(res => {
      let channelId = Object.keys(res.channels)[0]
      this.props.history.push(`/app/channels/${state.serverId}/${channelId}`)
    })
    this.closeModal();
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
          <div className='channel-header-wrapper' onClick={this.openModal}>
            <h3 className='channels-header'>text channels</h3>
            <i className="fa fa-plus add-channel-button" aria-hidden="true"></i>
          </div>

        <div id={this.state.modal.overlayId} onClick={this.closeModal}>
        </div>
          
          <div id={this.state.modal.modalId}>
            <form className='create-channel-form'>
              
              <div className='create-channel-header-wrapper'>
              <h3 className="create-channel-header">create text channel</h3>
              </div>
              
              <label className="create-channel-label">channel name</label>
              <input className="create-channel-input" type="text" value={this.state.name}
                onChange={this.update('name')}/>

              <label className="create-channel-label">channel topic</label>
              <input className="create-channel-input" type="text" value={this.state.topic}
                onChange={this.update('topic')}/>
              <div className="footer">
                <span className='cancel-modal' onClick={this.closeModal}>Cancel</span >
                <button className='create-channel-button' onClick={this.handleSubmit} >Create Channel</button>
              </div>
            </form>
          </div>  
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