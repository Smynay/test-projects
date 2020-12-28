import React, { useState } from 'react';
import { Container, Button, Badge } from 'reactstrap';
import { RoomButton } from '../RoomButton/RoomButton';

export const RoomsList = ({ rooms, currentRoomId, changeRoomAction }) => {
  let roomsArray = Array.from(rooms);
  console.log('rooms', roomsArray);
  return (
    <Container className="d-flex pt-2" sm="12">
      {roomsArray.map((id, index) => (
        <span key={id} className="mr-2">
          <RoomButton
            current={id == currentRoomId}
            index={index}
            id={id}
            changeRoomAction={changeRoomAction}
          />
        </span>
      ))}
    </Container>
  );
};
