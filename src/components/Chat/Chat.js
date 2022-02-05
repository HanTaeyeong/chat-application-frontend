import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'

let socket;

const ENDPOINT = 'http://localhost:5000'
const extraHeaders = {
  Authorization: "Bearer authorization_token_here"
}

export default function Chat() {
  const [value, setValue] = useState({ name: '', room: '' })


  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search)

    socket = io(ENDPOINT, { extraHeaders })

    setValue({ name, room })

    socket.emit('join', { name, room })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }

  }, [ENDPOINT, window.location.search])

  return <div>
    Chat
  </div>;
}
