import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/message_actions.js';
import MessageBarContainer from './message_bar';
import { fetchServer } from '../../actions/server_actions.js';
import MessageBlockContainer from './message_block';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.pusher = new Pusher('05f19b135aba7470dff0', {
      cluster: 'us2',
      encrypted: true
    });
   
  this.state = {}
}

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId);
    Pusher.logToConsole = true;
 
    let channel = this.pusher.subscribe(this.props.match.params.channelId.toString());
    channel.bind('post_message', (data) => {
      this.props.fetchMessages(this.props.match.params.channelId)
    });
  }

  componentDidUpdate() {
    this.refs.scroll.scrollIntoView();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId){
      this.props.fetchMessages(nextProps.match.params.channelId)
      
      this.pusher.unsubscribe(this.props.match.params.channelId.toString()) // unsubscribe from previous channel
      let channel =  this.pusher.subscribe(nextProps.match.params.channelId.toString()); //subscribe to new channel
      channel.bind('post_message', (data) => {
      this.props.fetchMessages(this.props.match.params.channelId)
   })
    }
  }

  render() {
    let channelId = this.props.match.params.channelId
    let serverId = this.props.match.params.serverId
    if (this.props.channels[channelId] && 
        Object.keys(this.props.channels).length &&
        this.props.channels[channelId].messages.length && 
        Object.keys(this.props.messages).length) {
    // if (Object.keys(this.props.messages).length) {
      let messageArray = this.props.channels[channelId].messages
      // let messageBlocks = [];
      let messageBlock = []
      let messages = this.props.messages;
      
      //TODO: refactor that disgusting Messageblock logic... use internal state so not mapping over entire message array ever time 
     
      return (
      <div className='message-index-wrapper'>
        <ul className="scroll-y">

            {messageArray.map((key, i) => {
              if (i !== messageArray.length - 1 // if not last key 
               &&
                (!messageBlock[0] // message block is empty
                || messageBlock[0].userId === messages[key].userId )) { //first message in message block user id  = to message user id

                messageBlock.push(messages[key])
               
                if ( messages[messageArray[i+1]] && messages[key] && messages[key].userId !== messages[messageArray[i+1]].userId) {
                   let messageProps = messageBlock.slice(0)
                messageBlock = []
                return <MessageBlockContainer key={key} serverId={serverId}
                channelId={channelId} messages={messageProps} />
                }

                  if (messageBlock[0] && i === messageArray.length - 2 &&
                  messageBlock[0].userId !== messages[messageArray[messageArray.length-1]].userId) { // last message user id not = to current block user id
                    let messageProps = messageBlock.slice(0)
                messageBlock = []
                return <MessageBlockContainer key={key} serverId={serverId}
                channelId={channelId} messages={messageProps} />
              }
              } else {
                  if (i === messageArray.length - 2 &&
                  messages[key].userId !== messages[messageArray[messageArray.length-1]].userId) { // last message user id not = to current block user id
                messageBlock.push(messages[key])
                
                let messageProps = messageBlock.slice(0)
                messageBlock = []
                return <MessageBlockContainer key={key} serverId={serverId}
                channelId={channelId} messages={messageProps} />
              }
                  
                  if (messageArray.length - 1 === i) { // if last key
                    messageBlock.push(messages[key]);
                    return <MessageBlockContainer key={key} serverId={serverId}
                  channelId={channelId} messages={messageBlock} />
                  } 
                let messageProps = messageBlock.slice(0)
                messageBlock = []
                messageBlock.push(messages[key]);
                return <MessageBlockContainer key={key} serverId={serverId}
                channelId={channelId} messages={messageProps} />
                }
            })}
            <div ref='scroll'></div>
        </ul>
        <MessageBarContainer />
      </div>
      );
    }
    return (
      <div className='no-messages'>
        <div className='no-messages-text'>no messages...yet</div>
        <div ref='scroll'></div>
        <MessageBarContainer />
      </div>
    )
  }
}

///////////////////////  CONTAINER  /////////////////////////////////

const mapStateToProps = ({ messages, channels },{ match })  => {
  return {
    messages,
    channels,
    match,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex)
