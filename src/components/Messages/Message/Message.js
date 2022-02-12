import React, { useState } from 'react';
import './Message.scss'

function Message({ name, message }) {
    const { user, text } = message || {};
    const isSentByCurrentUser = (user === name);

    return (
        <div className={`message-container flex-${isSentByCurrentUser ? 'end' : 'start'}`}>
            <div>
                {!isSentByCurrentUser && <p className={`sentText`}>{user}</p>}
            </div>
            <div className={`message-box background-${isSentByCurrentUser ? 'blue' : 'light'}`}>
                <p className={`message-text color-${isSentByCurrentUser ? 'white' : 'dark'}`}>{text}</p>
            </div>
        </div>);
}



export default Message;
