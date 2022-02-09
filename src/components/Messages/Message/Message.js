import React, { useState } from 'react';
import './Message.scss'


function Message({ user, text }) {
    const trimmedName = user;
    const isSentByCurrentUser = (user === trimmedName);

    return (
        <div className={`message-container ${isSentByCurrentUser && 'justify-end'}`}>
            <div className={`messageBox 'background-${isSentByCurrentUser ? 'blue' : 'light'}`}>
                <p className={`message-text color-${isSentByCurrentUser ? 'white' : 'dark'}`}>{text}</p>
            </div>
            <p className={`sentText ${isSentByCurrentUser && 'pr-10'}`}>{trimmedName}</p>
        </div>);
}



export default Message;