import React from 'react'
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // let context = this;
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
          <form className="session-form">
              <h3 className="session-header">{this.props.headerText}</h3>
              
              <div className="session-input-wrapper">
              <label for="username-input" className="input-label">Username</label>
                <input className="session-input" id="username-input" type="text"
                onChange={this.update('username')}
                value={this.state.username}/>
              
              </div>
              
              <div className="session-input-wrapper">
              <label for="password-input" className="input-label">Password</label>
                <input className="session-input" type="text" id="password-input"
                onChange={this.update('password')}
                value={this.state.password}/>
              </div>

              <button className="session-button" onClick={this.handleSubmit}>{this.props.buttonText}</button>
              {/*<input className="session-button" type="submit" value={this.props.buttonText}/>*/}

              <footer className="session-footer">
                {this.props.footerText}
                <Link to={this.props.linkPath}>{this.props.linkText}</Link>
              </footer>
          </form>
    );
  }
}

export default SessionForm;