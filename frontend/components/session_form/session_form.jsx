import React from 'react'
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { username: "", password: "" ,usernameError: "", passwordError: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // let context = this;
    this.props.clearErrors();
    

    let password = this.state.password;
    let username = this.state.username;

    if (password.length < 6 || username.length < 1) {
    if (password.length < 6) this.setState({ passwordError: "password must be at least 6 chars" })  
    if (username.length < 1) this.setState({ usernameError: "username is required" })
    return;
  }
  
    this.props.submitForm(this.state).then(() => {
      this.props.history.push('/')
    })
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
      <div className="logo-form-wrapper">

          <div className="logo-wrapper">
            <img id="session-brand" src="https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png" alt=""/>
            <img id="session-log" src="https://discordapp.com/assets/9babbea9acbfec5302d832bae6c3c184.svg" alt=""/>
          </div>
        
          <form className="session-form">
              <h3 className="session-header">{this.props.headerText}</h3>
              <span className="session-response-error">{this.props.errors}</span>
              
              <div className="session-input-wrapper">
                <label htmlFor="username-input" className="input-label">Username</label>
                <span className="form-error">{this.state.usernameError}</span>
                <input className="session-input" id="username-input" type="text"
                  onChange={this.update('username')}
                  value={this.state.username}/>
              </div>
              
              <div className="session-input-wrapper">
                <label htmlFor="password-input" className="input-label">Password</label>
                <span className="form-error">{this.state.passwordError}</span>
                <input className="session-input" type="text" id="password-input"
                  onChange={this.update('password')}
                  value={this.state.password}/>
              </div>

              <button className="session-button" onClick={this.handleSubmit}>{this.props.buttonText}</button>
              {/*<input className="session-button" type="submit" value={this.props.buttonText}/>*/}

              <footer className="session-footer">
                {this.props.footerText}
                <Link to={this.props.linkPath} className="session-link">{this.props.linkText}</Link>
              </footer>
          </form>
      </div>
    );
  }
}

export default SessionForm;