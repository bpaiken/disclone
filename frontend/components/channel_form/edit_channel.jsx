import React from 'react'

class EditChannel extends React.Component {
  constructor(props){
    super(props);
    
    this.state = { 
        name: this.props.channel.name,
        topic: this.props.channel.topic,
        id: this.props.channel.id,
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
    this.setState({ 
      name: this.props.channel.name,
      topic: this.props.channel.topic,
      modal: { modalId: 'closed', overlayId: 'closed'}
     })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    //handle errors here
  
    this.props.patchChannel(this.state);
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
      <div className='edit-channel-container'>
         <i className="fa fa-cog" onClick={this.openModal} aria-hidden="true"></i>

        <div id={this.state.modal.overlayId} onClick={this.closeModal}>
          </div>
          
          <div id={this.state.modal.modalId}>
            <form className='create-channel-form'>
              
              <div className='create-channel-header-wrapper'>
              <h3 className="create-channel-header">time for a change?</h3>
              </div>
              
              <label className="create-channel-label">channel name</label>
              <input className="create-channel-input" type="text" value={this.state.name}
                value={this.state.name} onChange={this.update('name')}/>

              <label className="create-channel-label">channel topic</label>
              <input className="create-channel-input" type="text" value={this.state.topic}
                value={this.state.topic} onChange={this.update('topic')}/>
              <div className="footer">
                <span className='cancel-modal' onClick={this.closeModal}>Cancel</span >
                <button className='create-channel-button' onClick={this.handleSubmit} >Submit</button>
              </div>
            </form>
          </div>  
      </div>
    )
  }
}

//////////////  CONTAINER ///////////////////
import { connect } from 'react-redux'
import { patchChannel } from '../../actions/channel_actions.js'
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ servers }, ownProps) => {
  return {
    server: servers[ownProps.match.params.serverId],
    servers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    patchChannel: (channel) => dispatch(patchChannel(channel))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditChannel));