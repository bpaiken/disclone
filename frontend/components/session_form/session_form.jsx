import React from 'react'
import { Link } from 'react-router-dom'


class SessionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { username: "", password: "" ,usernameError: "", passwordError: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({usernameError: "", passwordError: ""});

    let password = this.state.password;
    let username = this.state.username;

    if (password.length < 6 || username.length < 1) {
    if (password.length < 6) this.setState({ passwordError: "password must be at least 6 chars" })  
    if (username.length < 1) this.setState({ usernameError: "username is required" })
    return;
  }
  
    this.props.submitForm(this.state).then(() => {
    })
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  loginGuest() {
    this.props.loginGuest({password: 'password', username: 'guest'})
  }

  render() {
    
    return (
    <div className="session-wrapper"> 
      <div className="logo-form-wrapper">
          <div className="logo-wrapper">
            <img id="session-brand" src="https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png" alt=""/>
            <img id="session-logo" src="https://discordapp.com/assets/9babbea9acbfec5302d832bae6c3c184.svg" alt=""/>
          </div>
        
          <form className="session-form">
              <h3 className="session-header">{this.props.headerText}</h3>
              <span className="session-response-error">{this.props.errors}</span>
              
              <div className="session-input-wrapper">
                <div className="label-error-container">
                  <label htmlFor="username-input" className="input-label">Username</label>
                  <span className="form-error">{this.state.usernameError}</span>
                </div>
                <input className="session-input" id="username-input" type="text"
                  onChange={this.update('username')}
                  value={this.state.username}/>
              </div>
              
              <div className="session-input-wrapper">
                <div className="label-error-container">
                <label htmlFor="password-input" className="input-label">Password</label>
                <span className="form-error">{this.state.passwordError}</span>
                </div>
                
                <input className="session-input" type="password" id="password-input"
                  onChange={this.update('password')}
                  value={this.state.password}/>
              </div>

              <button className="session-button" onClick={this.handleSubmit}>{this.props.buttonText}</button>
              {/*<input className="session-button" type="submit" value={this.props.buttonText}/>*/}

              <footer className="session-footer">
                <div className='session-footer-text'>{this.props.footerText}</div>
                <Link to={this.props.linkPath} className="session-link">{this.props.linkText}</Link>
                <div className='guest-text'>Or login as</div>
                <div className='guest-link' onClick={this.loginGuest}>Guest</div>
              </footer>
          </form>
      </div>
    </div>
    );
  }
}

export default SessionForm;
