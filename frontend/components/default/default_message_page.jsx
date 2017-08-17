import React from 'react';

export default () => {
  return (
    <div className='default-message-page'>
      <div id='default-header'>
        <h4>Welcome To Disclone!</h4>
        <p>Disclone is a web application based on Discord, built with Rails and React w/ Redux.</p>
      </div>
      <img className="default-image" src="https://s3.amazonaws.com/disclone-dev/disclone_marked.PNG" alt=""/>
      <div id="default-info-wrapper">
        <ul id='default-info'>
          <li><span className='strong'>Server Index:</span>  Here you will find the servers that user is subscribed to (for this demo, all users are subscribed to the same four servers). Click on a server to see gain access to the message channels belonging to that server, as well as a list of all of the users subscribed to that server.</li>
          <li><span className='strong'>Channel Index:</span>  Here you will find a list of server channels or direct message channels.  You can create and edit message channels here as well.</li>
          <li><span className='strong'>Direct Messages Button:</span>  Click to this button to gain access too all of a users direct message or group conversations.  You can also start a new direct message channel by clicking 'Start a Conversation'</li>
          <li><span className='strong'>Current User:</span>  Here you will find the logout and edit user button.  You can edit your user avatar image by clicking edit user.</li>
          <li><span className='strong'>User Index:</span>  After selecting a server, the User Index will appear.  Here you can find all of the users that are subscribed to a server, as well as whether or not they are currently online</li>
        </ul>
      </div>
    </div>
  );
};

