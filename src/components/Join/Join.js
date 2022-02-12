import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Join.scss'

export default function Join() {
  const [inputValue, setInputValue] = useState({ name: "", room: '' })
  const { name, room } = inputValue;
  const navigate = useNavigate();

  const onChange = (e) => setInputValue({ ...inputValue, [e.target.name]: e.target.value })

  const onClick = (e) => {
    if (!name || !room) { return }
    e.preventDefault();

    const targetPath = `/chat?name=${name}&room=${room}`;
    navigate(targetPath)
  }

  return <div id='join-outer-container'>
    <div className='join-inner-container'>
      <h1 id='join-heading'>Join</h1>

      <input id='#join-input-name' className='join-input' placeholder='Name' name='name'
        onChange={onChange} onKeyPress={e => e.key === "Enter" && onClick(e)} />
      <input id='#join-input-room' className='join-input' placeholder='Room' name="room"
        onChange={onChange} onKeyPress={e => e.key === "Enter" && onClick(e)} />

      <div onClick={onClick}  >
        <button className='join-sign-in-button' >Sign In</button>
      </div>

    </div>
  </div>;
}
