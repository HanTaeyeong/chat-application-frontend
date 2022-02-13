import React, { useState } from 'react';
import './Message.scss'

function Message({ name, message }) {
    const { user, text } = message || {};
    const isSentByname = (user === name);

    return (
        <div className={`message-container flex-${isSentByname ? 'end' : 'start'}`}>
            <div>
                {!isSentByname && <p className={`sentText`}>{user}</p>}
            </div>
            <div className={`message-box background-${isSentByname ? 'blue' : 'light'}`}>
                <p className={`message-text color-${isSentByname ? 'white' : 'dark'}`}>{text}</p>
            </div>
        </div>);
}



export default Message;
