import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './Join.scss'


export default function Join() {
  const [inputValue, setInputValue] = useState({ name: "", room: '' })
  const { name, room } = inputValue;

  const onChange = (e) =>
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  const onClick=(e)=>{
    console.log(name, room)
    if(!name || !room) return e.preventDefault();
  }

  return <div id='join-outer-container'>
    <div className='join-inner-container'>
      <h1 id='join-heading'>Join</h1>
      <input className='join-input' placeholder='Name' name='name' onChange={onChange} />
      <input className='join-input' placeholder='Room' name="room" onChange={onChange} />
      <Link to={`/chat?name=${name}&room=${room}`} onClick={e => (!name || !room) && e.preventDefault()} >
        <button className='join-sign-in-button' >Sign In</button>
      </Link>
    </div>
  </div>;
}
