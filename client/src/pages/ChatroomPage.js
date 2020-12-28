import React, { useState, useContext } from 'react';
import io from 'socket.io-client';

import { Header } from '../components/Header/Header';
import { MessageRoll } from '../components/MessageRoll/MessageRoll';
import { SenderPanel } from '../components/SenderPanel/SenderPanel';
import { RoomsList } from '../components/RoomsList/RoomsList';
import '../styles/ChatroomPage.scss';

import { UserContext } from '../contexts/User.context';
import { Container } from 'reactstrap';

const socket = io.connect('http://localhost:5000');

export const ChatroomPage = (props) => {
  const userData = useContext(UserContext);
  const [currentRoomId, setCurrentRoomId] = useState(userData.token);
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(0);

  if (!connected) {
    if (!userData.rooms.length) {
      socket.emit('createRoom', currentRoomId);
      userData.addRoom(currentRoomId);
    }

    if (props.match.params.roomId) {
      socket.emit('joinRoom', {
        nickname: userData.nickname,
        roomId: props.match.params.roomId,
      });
      setCurrentRoomId(props.match.params.roomId);
      userData.addRoom(props.match.params.roomId);
    }

    console.log(props.match.params.roomId);
    console.log(userData.rooms);
    console.log(currentRoomId);

    setConnected(1);
  }

  socket.on('messages', (data) => {
    if (data.senderToken === userData.token) {
      data.sender = 'You';
    }
    const newMessages = [...messages, data];

    setMessages([
      {
        roomId: currentRoomId,
        sender: userData.nickname,
        senderToken: userData.token,
        text: document.getElementById('messageBox').value,
        date: Date.now(),
      },
    ]);
  });

  socket.on('joinRoom', (roomId) => {
    setCurrentRoomId(roomId);
  });

  function sendAction() {
    socket.emit('message', {
      roomId: currentRoomId,
      sender: userData.nickname,
      senderToken: userData.token,
      text: document.getElementById('messageBox').value,
      date: Date.now(),
    });
  }

  function changeRoomAction(roomId) {
    setCurrentRoomId(roomId);
    console.log(currentRoomId);
  }

  return (
    <div className="chatroom d-flex flex-column" sm="12">
      <div className="chatroom__header">
        <Header />
      </div>
      <RoomsList
        rooms={userData.rooms}
        currentRoomId={currentRoomId}
        changeRoomAction={changeRoomAction}
      ></RoomsList>
      <Container className="chatroom__message-roll" sm="12">
        <MessageRoll messages={messages} />
      </Container>
      <div className="chatroom__user-panel mt-3">
        <SenderPanel sendAction={sendAction} placeholder={'Your message...'} />
      </div>
    </div>
  );
};
