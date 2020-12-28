import React from 'react';
import { Container } from 'reactstrap';
import './Header.scss';
import logo from './logo.svg';

export const Header = () => {
  return (
    <Container className="header d-flex justify-content-between" fluid={true}>
      {/* <div className="header__burger"></div> */}
      <div className="header__logo-container d-flex">
        <img className="header__logo" src={logo} alt="Logo" />
        <p className="header__logo-text">ForaChat</p>
      </div>
      {/* <div></div> */}
    </Container>
  );
};
