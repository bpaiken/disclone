import React from 'react'
import { connect } from 'react-redux'
import { fetchMessages } from '../../actions/message_actions.js'
import MessageBarContainer from './message_bar'
import { fetchServer } from '../../actions/server_actions.js'
import MessageBlockContainer from './message_block'
import { pusher } from '../../util/pusher.js'

class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
   
    this.state = ({
      messageBlocks: []
    })

    this.buildMessageBlocks = this.buildMessageBlocks.bind(this);
    this.updateMessageBlocks = this.updateMessageBlocks.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId);
    this.buildMessageBlocks()

    let channel = pusher.subscribe(this.props.match.params.channelId.toString());
    channel.bind('message', (message) => {
      this.updateMessageBlocks(message)
      this.props.dispatchMessage(message)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.buildMessageBlocks(nextProps)
    if (this.props.match.params.channelId !== nextProps.match.params.channelId){
      this.props.fetchMessages(nextProps.match.params.channelId)
      // .then(this.buildMessageBlocks(nextProps))
      
      pusher.unsubscribe(this.props.match.params.channelId.toString()) // unsubscribe from previous channel
      let channel =  pusher.subscribe(nextProps.match.params.channelId.toString()); //subscribe to new channel
      let dispatchMessage = this.props.dispatchMessage

      channel.bind('message', (message) => {
        this.updateMessageBlocks(message) //update internal state
        this.props.dispatchMessage(message) //update global state
      })
    }
  }

  componentDidUpdate() {
    this.refs.scroll.scrollIntoView();
  }

  buildMessageBlocks(nextProps) {
    let channelId = nextProps ? nextProps.match.params.channelId : this.props.match.params.channelId
    let messages = nextProps ? nextProps.messages : this.props.messages
    let messageArray = nextProps ? nextProps.channels[channelId].messages : this.props.channels[channelId].messages
    const messageBlocks = []
    let block = []

    for (let i = 0; i < messageArray.length; i++) {
      let prevMessage = messages[messageArray[i - 1]]
      let message = messages[messageArray[i]]
      let nextMessage = messages[messageArray[i + 1]]
      
      // first message
      if (i === 0) {
        block.push(messages[messageArray[i]]) 
      }

       // not first message AND message userId matches previous message userId
      if (i !== 0 && prevMessage.userId === message.userId) { 
        block.push(message)
      }

      // not first message AND previous message userId does not match message userId
      if (i !== 0 && prevMessage.userId !== message.userId) {  
        messageBlocks.push(block)
        block = []
        block.push(message)  
      }

      // last message
      if(i === messageArray.length - 1) {
        messageBlocks.push(block)
        block = []  
      }
    }
    
    this.setState({
      messageBlocks: messageBlocks
    })
    
  }

  updateMessageBlocks({ messages }) {
    let messageBlocks = this.state.messageBlocks;
    let message = messages[Object.keys(messages)[0]];
    
    if (messageBlocks.length) {
      var lastBlock = messageBlocks[messageBlocks.length - 1]
      var lastMessage = lastBlock[lastBlock.length - 1]
    
      if (message.userId === lastMessage.userId) {
        lastBlock.push(message);
      } else {
        messageBlocks.push([message]);
      }
    } else {
       messageBlocks.push([message]); // need if channel has no messages
    }
       
    this.setState({ messageBlocks: messageBlocks});
  }

  render() {
    let channelId = this.props.match.params.channelId
    let serverId = this.props.match.params.serverId

    if (this.props.channels[channelId] &&                   
        this.props.channels[channelId].messages.length &&   
        Object.keys(this.props.messages).length) {

      let messageArray = this.props.channels[channelId].messages
      let messages = this.props.messages;
      
      return (
        <div className='message-index-wrapper'>
          <ul className="scroll-y">
            {this.state.messageBlocks.map((block,i) => {
              return <MessageBlockContainer key={i} serverId={serverId}
                      channelId={channelId} messages={block} />
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

///////////////////////  CONTAINER  //////////////////////////////
import { receiveMessages } from '../../actions/message_actions.js'

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
  dispatchMessage: (message) => dispatch(receiveMessages(message)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex)



