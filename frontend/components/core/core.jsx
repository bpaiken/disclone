import React from 'react';
// import MessageLogContainer from '../message_log/message_log_container';
import ServerIndexContainer from '../server_index/server_index';
import ServerForm from '../server_form/server_form';
import CreateServer from '../server_form/create_server'; //test only
import ChannelIndexContainer from '../channel_index/channel_index';
import MessageIndexContainer  from '../message_index/message_index';
import { Route } from 'react-router-dom';

class Core extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
  
  }

  component

  render() {
    return (
    <div>
      <ServerIndexContainer />
      {/*<ServerForm />
      <CreateServer />*/}
      <Route path="/app/channels/:serverId/" component={ChannelIndexContainer} />
      <Route path="/app/channels/:serverId/:channelId" component={MessageIndexContainer} />
    </div>
    );
  } 
}

export default Core;