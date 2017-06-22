import React from 'react'

class CreateServer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

 render() {
   return (
      <div>
        <h3>create your server</h3>
        <span>server name</span>
        <div className='input-avatar-wrapper'>
          <input className='create-server-input' type="text"/>
          <button>add avatar placeholder</button>
        </div>
        <div>
          <span>Back</span>
          <button>Create</button>
        </div>
      </div>
    );
  } 
}

export default CreateServer;