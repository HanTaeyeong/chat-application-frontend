import React, { useState } from 'react';
import './Message.scss'

function Message({ name, message }) {
    const { user, text } = message;
    const isSentByCurrentUser = (user === name);

    return (
        <div className={`message-container 'justify-${isSentByCurrentUser ? 'end' : 'start'}`}>
            <div className={`message-box background-${isSentByCurrentUser ? 'blue' : 'light'}`}>
                <p className={`message-text color-${isSentByCurrentUser ? 'white' : 'dark'}`}>{text}</p>
            </div>
            <p className={`sentText ${isSentByCurrentUser ? 'pr-10' : 'pl-10'}`}>{user}</p>
        </div>);
}



export default Message;
