import React, { useState } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from 'reactstrap';

export const RoomButton = ({ current, id, index, changeRoomAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <ButtonDropdown
      key={index + 'RB'}
      isOpen={isOpen}
      toggle={toggleHandler}
      size="sm"
    >
      <DropdownToggle caret color="primary" outline={current ? false : true}>
        Room {index + 1} <Badge>4</Badge>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Online: 4</DropdownItem>
        <DropdownItem divider></DropdownItem>
        <DropdownItem onClick={changeRoomAction.bind(this, id)} data={id}>
          Switch to
        </DropdownItem>
        <DropdownItem disabled data={id}>
          Get link
        </DropdownItem>
        <DropdownItem disabled>Exit</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};
