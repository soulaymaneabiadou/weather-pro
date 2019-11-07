import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar color='light'>
      <Container>
        <NavbarBrand className='brand'>Weather PRO</NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
