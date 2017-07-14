import React from 'react';

class EditUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: this.props.currentUser.username,
      avatarUrl: this.props.currentUser.avatarUrl,
      avatarFile: null,
      status: 'hide',
      modal: {
        modalId: 'closed',
        overlayId: 'closed',
      }
    }

    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.readFile = this.readFile.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  hide() {
    this.setState({status: "hide"})
  }

  show() {
    this.setState({status: "show"})
  }

  readFile(e) {
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ avatarUrl: reader.result, avatarFile: file})
    } 
    
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('user[username]',this.state.username)
    formData.append('user[avatar]', this.state.avatarFile)
    
    let id = this.props.currentUser.id
    this.props.patchUser(formData, id);
    this.closeModal();
  }

  update(e) {
    this.setState({username: e.currentTarget.value})
  }

  openModal() {
    this.setState({ modal: 
      { 
        modalId: 'edit-channel-modal', 
        overlayId: 'create-channel-overlay'
      } 
    });
  }
    
  closeModal(e) {
    this.setState({ modal: { modalId: 'closed', overlayId: 'closed'} })
  }

  render() {
    let currentUser = this.props.currentUser;
    return (
      <div className='edit-user-container'>

        <div className='tooltip-control'>
          <i className="fa fa-cog current-user-cog" onClick={this.openModal} aria-hidden="true"
          onMouseEnter={this.show} onMouseLeave={this.hide}></i>
          <div className="tooltip edit-user-tooltip" id={this.state.status} >
            Edit User
          </div>
        </div>

        <div id={this.state.modal.overlayId} onClick={this.closeModal}>
        </div>

        <div id={this.state.modal.modalId}>
          <header className='white-form-header'>edit user</header>
          
          <div className='edit-user-control'>
            <div className='user-details'>
              <span>username</span>
              <input type="text" onChange={this.update} 
              value={currentUser.username}/> 
            </div>
 
            <div className='avatar-uploader'>

              <input type="file" className='file-input' onChange={this.readFile} />
                <img src={this.state.avatarUrl} className='file-input-image'/>
             
              <div className='file-input-text'>Change Avatar</div>
            </div>
          </div>

          <footer className='edit-user-footer'>
            <div onClick={this.closeModal} className='edit-user-cancel'>Cancel</div>
            <button onClick={this.handleSubmit} className='edit-user-button'>Submit</button>
          </footer>
        </div>
      </div>
    );
  }
}

///////////// CONTAINER ///////////////
import { connect } from 'react-redux';
import { patchUser } from '../../actions/user_actions.js'

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    patchUser: (user, id) => dispatch(patchUser(user,id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);