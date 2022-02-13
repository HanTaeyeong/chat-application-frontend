import React from 'react';

import './Input.scss'

export default function Input({ text, setText, sendMessage }) {
    const onClickButton = (e) => {
        e.preventDefault()
        sendMessage()
    }
    return <form className='form'>
        <input
            id='message-input'
            type='text'
            placeholder='Type a message'
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && sendMessage()}
        />
        <button className='send-button' onClick={e => onClickButton(e)}>Send</button>

    </form>;
}
