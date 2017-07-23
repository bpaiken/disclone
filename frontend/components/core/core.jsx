import React from 'react';
// import MessageLogContainer from '../message_log/message_log_container';
import SidebarContainer from '../sidebar/sidebar';
import ServerForm from '../server_form/server_form';
import CreateServer from '../server_form/create_server'; //test only
import ChannelIndexContainer from '../channel_index/channel_index';
import MessageIndexContainer  from '../message_index/message_index';
import { Route } from 'react-router-dom';
import UserIndexContainer from '../user_index/user_index';
import Header from '../header/header.jsx';
import DirectIndexContainer from '../direct_index/direct_index';
import DefaultMessagePage from '../default/default_message_page'


class Core extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      
    <div className="core-wrapper">
      <SidebarContainer />
      
      <Route path="/app/channels/:serverId/:channelId" component={ChannelIndexContainer} />

      <Route path="/app/directs" component={DirectIndexContainer} />
      
      <div className="header-content">
        <Route path="/app/channels/:serverId/:channelId" component={Header} />
        <Route exact path="/app/directs" component={Header} />
        <Route path="/app/directs/:channelId" component={Header} />
      
        <div className='flex-control'>
        <Route path="/app/channels/:serverId/:channelId" component={MessageIndexContainer} />
        <Route exact path ="/app/directs" render={DefaultMessagePage} />
        <Route path="/app/directs/:channelId" component={MessageIndexContainer} />
        
        <Route path="/app/channels/:serverId/:channelId" component={UserIndexContainer} />
        </div>
      </div>
    </div>
    );
  } 
}

export default Core;