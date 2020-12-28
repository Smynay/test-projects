import React from 'react';

import { Message } from '../Message/Message';

export const MessageRoll = ({ messages }) => {
  return (
    <div className="d-flex flex-column justify-content-end message-roll">
      {messages.map((msg, i) => {
        return (
          <Message
            key={i + 'MR'}
            message={msg}
            currentUser={msg.sender === 'You'}
          />
        ); //TODO: Change checker!
      })}
    </div>
  );
};
