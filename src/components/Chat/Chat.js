import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.scss'

import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'

let socket;

const ENDPOINT = 'http://44.202.97.232:5000'
const extraHeaders = {
  // Authorization: "Bearer authorization_token_here"
}

export default function Chat() {
  const [value, setValue] = useState({ name: '', room: '' })
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search)

    //const socket = openSocket('http://localhost:8000', , {transports: ['websocket']});
    socket = io(ENDPOINT)

    setValue({ name, room })

    socket.emit('join', { name, room })
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPOINT, window.location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
      console.log(value)
    })

  }, [messages])

  const sendMessage = (e) => {
    e.preventDefault()

    const { message } = value;
    if (message) {
      socket.emit('sendMessage', message)
      setMessage('')
    }
  }

  return <div className='chat-outer-container'>
    <div className='chat-inner-container'>
      <InfoBar room={value.room} />
      <Input/>
    </div>
    Chat
  </div>
}
