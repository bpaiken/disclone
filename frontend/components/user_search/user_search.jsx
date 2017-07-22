import React from 'react';
import merge from 'lodash/merge';

class UserSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: {},
      search: {},
      searchValue: "",
      topic: "",
      name: "",
      modal: {
        modalId: 'closed',
        overlayId: 'closed'
      }
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers()
    .then((res) => {
      let users = res.users
      this.setState({
        search: users,
        selected: { [this.props.currentUser.id]: users[this.props.currentUser.id] }
      })
    })
  }

  openModal() {
    this.setState({ modal: 
      { 
        modalId: 'user-search-modal', 
        overlayId: 'create-channel-overlay'
      } 
    });
  }
    
  closeModal(e) {
    this.setState({
      selected: { [this.props.currentUser.id]: this.props.users[this.props.currentUser.id] },
      search: this.props.users,
      searchValue: "",
      modal: { 
        modalId: 'closed', 
        overlayId: 'closed'
        } 
      })
  }

  update(e) {
    let input = e.currentTarget.value
    let search = {};
    let users = this.props.users

    Object.keys(users).forEach(key => {
      if (users[key].username.includes(input)) {
        let user = { [key]: users[key] }
        search = merge(search, user)
        }
      });
     this.setState({
       searchValue: e.currentTarget.value,
       search: search
      })
  }

  handleSubmit(e) {
    let channel = {
      users: this.state.selected,
      name: "direct",
      direct: true,
    }

    this.props.createDirect(channel)
    this.closeModal();
  }

  selectUser(user) {
    return (e) => {
      // let user = this.props.users[id];
      let selected = this.state.selected;
      let userObj = {[user.id]: user}
      
      this.setState({ selected: merge(selected,userObj) })
    }
  }

  rejectUser(user) {
    return(e) => {
      let selected = this.state.selected
      delete selected[user.id]
      
      //doesn't allow current user to be removed from selected column
      //TODO: add constraint to back end
      selected[this.props.currentUser.id] = this.props.users[this.props.currentUser.id]
      
      this.setState({selected: selected})
    }
  }

  render() {
      let search = this.state.search;
      let selected = this.state.selected;
      let users = this.props.users;
    return (
      <div className='user-search-container'>


       <header className='server-header' >
          <div className='server-header-control' onClick={this.openModal}>
            <span>Start a Conversation</span>
            <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
          </div>
        </header>  

        <div id={this.state.modal.overlayId} onClick={this.closeModal} />

        
        <div className={this.state.modal.modalId}>
          <form className='user-search-form'>
            <input onChange={this.update} type="text" value={this.state.searchValue}/>
            <div></div>
          </form>
          <span className='user-search-text'>searching all users</span>
          
          <div className='user-list-control'>
            <ul className='user-search-list'>
              <span>Select Users to Create a Channel</span>
              {Object.keys(search).map(key => {
                return (
                  <div key={key} className='search-item' onClick={this.selectUser(users[key])}>
                    <img className='circle-base' src={users[key].avatarUrl}/>
                    <div>{users[key].username}</div>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </div>
                )
              })}
            </ul>

            <ul className='user-search-list select-list'>
              <span>Selected Users</span>
              {Object.keys(selected).map(key => {
                return (
                  <div key={key} className='search-item' onClick={this.rejectUser(users[key])}>
                    <img className='circle-base' src={users[key].avatarUrl}/>
                    <div>{users[key].username}</div>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </div>
                )
              })}
            </ul>  
          </div>

          <footer className='user-search-footer'>
            <button onClick={this.handleSubmit}>Create Channel</button>
          </footer>
        </div>
        
      </div>
    );
  }
}

//////////////  CONTAINER /////////////////
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions.js';
import { createDirect } from '../../actions/channel_actions.js';

const mapStateToProps = ({ users, currentUser }) => {
  return {
    users,
    currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createDirect: (channel) => dispatch(createDirect(channel))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);