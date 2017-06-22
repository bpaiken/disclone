import React from 'react'
// import MessageLogContainer from '../message_log/message_log_container';
import ServerIndexContainer from '../server_index/server_index'
import ServerForm from '../server_form/server_form'
import CreateServer from '../server_form/create_server' //test only

class Core extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
   
  }

  component

  render() {
    return (
    <div>
      <ServerIndexContainer />
      <ServerForm />
      <CreateServer />
    </div>
    );
  } 
}

export default Core;