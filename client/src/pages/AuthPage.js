import React, { useCallback, useContext } from 'react';
import {
  Container,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input,
  Button,
} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/User.context';
import '../styles/AuthPage.scss';

export const AuthPage = (props) => {
  const auth = useContext(UserContext);

  auth.loadUser();

  console.log(auth);

  function clickHandle() {
    const nickname = document.getElementById('nickname').value;

    if (nickname) {
      auth.setUser(nickname, []);
    }
  }

  console.log(props);

  return (
    <Form>
      {auth.token ? (
        <Redirect
          to={props.match.params.roomId ? props.match.params.roomId : '/'}
        />
      ) : (
        ''
      )}
      <Container className="auth__container d-flex flex-column justify-content-center align-items-center">
        <h2 className="mb-4 text-center">For start chatting select nickname</h2>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <Input id="nickname" placeholder="Select nickname" />
        </InputGroup>
        <Button className="mt-4 center" color="primary" onClick={clickHandle}>
          Confirm
        </Button>
      </Container>
    </Form>
  );
};
