import React from 'react'
import CreateOrJoinServer from './create_or_join_server';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

 render() {
   return (
      <div>
        <CreateOrJoinServer />
      </div>
    );
  } 
}

export default ServerForm;