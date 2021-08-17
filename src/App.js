import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import  ChatFeed  from './components/ChatFeed'
export default function App() {
    return (
<ChatEngine
 height="100vh"
 projectID="032a437d-ce24-4ec0-99f5-ab499ae1b141"
 userName="Karthick"
 userSecret="621318106041"
 renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
/>
    )
}
