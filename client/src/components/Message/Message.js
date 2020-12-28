import React from 'react';

import './Message.scss';

export const Message = ({ message, currentUser }) => {
  let addition = '';

  if (currentUser) {
    addition = ' currentUser';
  }

  return (
    <div className={'message' + addition}>
      <div className="message__sender">{message.sender}</div>
      <div className="message__text d-flex flex-column">
        <span>{message.text}</span>
        <div className="message__time">
          {new Date(message.date).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  );
};
