import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.scss'

import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'

let socket;

const ENDPOINT = 'http://localhost:5000' || process.env.REACT_APP_ENPOINT;

export default function Chat() {
  const [value, setValue] = useState({ name: '', room: '' })
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search)

    socket = io(ENDPOINT)

    setValue({ name, room })

    socket.emit('join', { name, room })

    socket.on('message', (message) => {
      setMessages(prev => [...prev, message]);
    })

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [])

  const sendMessage = () => {
    if (!text) { return; }

    socket.emit('sendMessage', text)
    setText('')
  }

  return <div className='chat-outer-container'>
    <div className='chat-inner-container'>
      <InfoBar room={value.room} users={users} />
      <Messages name={value.name} messages={messages} />
      <Input sendMessage={sendMessage} setText={setText} text={text} />
    </div>
  </div>
}
