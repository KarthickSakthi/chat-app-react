import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import  ChatFeed  from './components/ChatFeed'
export default function App() {
    return (
<ChatEngine
 height=""
 projectID=""
 userName=""
 userSecret=""
 renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
/>
    )
}
