import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.scss'

import Message from './Message/Message';

function Messages({ name, messages }) {
    return (
        <ScrollToBottom>
            {messages.map((message, i) => <div key={message.user + i + message.text}>
                <Message user={message.user} text={message.text} />
            </div>)}
        </ScrollToBottom>
    )
}

export default Messages;
