import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'

let socket;

const ENDPOINT = 'http://44.202.97.232:5000'
const extraHeaders = {
 // Authorization: "Bearer authorization_token_here"
}

export default function Chat() {
  const [value, setValue] = useState({ name: '', room: '',message:"", messages:[] })

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

  useEffect(()=>{
    socket.on('message',(message)=>{
      setValue({...value, messages:[...value.messages, message]})
      console.log(value)
    })

  },[])
  
  return <div>
    Chat
  </div>
}
