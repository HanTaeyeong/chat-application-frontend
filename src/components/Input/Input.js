import React from 'react';

import './Input.scss'

export default function Input({ message, setMessage, sendMessage }) {

    return <form className='form'>
        <input
            className='input'
            type='text'
            placeholder='Type a message'
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && sendMessage(e)}
        />
        <button className='send-button' onClick={e=>sendMessage(e)}>Send</button>
        
    </form>;
}
