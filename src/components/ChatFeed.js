import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
export default function ChatFeed(props) {
    const{chats,activeChat,userName,messages} = props;
    const chat = chats && chats[activeChat];
    
  const renderMessages=()=>{
      const keys = Object.keys(messages)
      

      return keys.map((keys,index)=>{
           const message=messages[keys];
           const lastMessageKey = index===0 ? null : keys[index-1]
           const isMyMessage = userName === message.sender.username 

         return(
             <div  style={{width:'100%'}}>
                 <div className="message-block">
                   {
                       isMyMessage?<MyMessage/>:<TheirMessage/>
                   }
                 </div>
                 <div className='read-receipts' style={{marginRight : isMyMessage ? '18px':'0px',marginLeft:isMyMessage?'0px':'68px'}}>
                              Read-Receipts
                 </div> 

             </div>
         )

      })
  }
  renderMessages()

    return (
        <div>
            ChatFeed
        </div>
    )
}
