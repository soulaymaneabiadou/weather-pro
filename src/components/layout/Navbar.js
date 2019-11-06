import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar dark color='light'>
      <Container>
        <NavbarBrand href='/'>Weather PRO</NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
