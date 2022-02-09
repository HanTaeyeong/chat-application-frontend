import React from 'react';

import './Input.scss'

export default function Input({ message, setMessage, sendMessage }) {
    const onClickButton = (e) => {
        e.preventDefault()
        sendMessage(message)
    }
    return <form className='form'>
        <input
            className='input'
            type='text'
            placeholder='Type a message'
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && sendMessage(e.target.value)}
        />
        <button className='send-button' onClick={e => onClickButton(e)}>Send</button>

    </form>;
}
