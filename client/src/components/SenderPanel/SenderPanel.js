import React, { useContext } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';

import { UserContext } from '../../contexts/User.context';
import './SenderPanel.scss';
import button from './button.svg';

export const SenderPanel = ({
  sendAction,
  placeholder = 'Your message...',
}) => {
  const userData = useContext(UserContext);
  const $messageBoxId = 'messageBox';

  function checkMobile() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true;
    }
    return false;
  }

  function keyHandle(e) {
    if (e.which === 13) {
      if (e.shiftKey || checkMobile()) {
      } else {
        e.preventDefault();
        sendHandle();
      }
    }
  }

  function sendHandle() {
    if (document.getElementById($messageBoxId).value !== '') {
      sendAction();
      document.getElementById($messageBoxId).value = '';
    }
    document.getElementById($messageBoxId).focus();
  }

  return (
    <Container>
      <FormGroup className="d-flex">
        <Input
          className="sender-panel__textarea"
          type="textarea"
          name="message"
          id="messageBox"
          placeholder={placeholder}
          onKeyDown={keyHandle}
        />
        {checkMobile() ? (
          <div className="sender-panel__sendButton ml-2" onClick={sendHandle}>
            <img src={button} height="25" alt="" />
          </div>
        ) : (
          ''
        )}
      </FormGroup>
    </Container>
  );
};
