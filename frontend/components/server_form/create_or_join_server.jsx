import React from 'react'

class CreateOrJoinServer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

 render() {
   return (
     <div>  
        <div className="create-server-form">
          <h3>oh, another server huh?</h3>        

          {/*graphic*/}

          <div className="form-button-wrapper">
            <button>Create A Server</button>
            <button>Join A Server</button>     
          </div>

        </div>         

     </div>


   );
 } 
}
export default CreateOrJoinServer