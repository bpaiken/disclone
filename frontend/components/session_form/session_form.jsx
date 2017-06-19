import React from 'react'


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
          <form onSubmit={this.handleSubmit}>
              <h3>{this.props.headerText}</h3>
              
              <label htmlFor="">Username
                <input type="text"
                onChange={this.update('username')}
                value={this.state.username}/>
              </label>
              
              <label htmlFor="">Password
                <input type="text" 
                onChange={this.update('password')}
                value={this.state.password}/>
              </label>

              <input type="submit" value={this.props.buttonText}/>
          </form>
    );
  }
}

export default SessionForm;