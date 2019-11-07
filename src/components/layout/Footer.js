import React, { Fragment } from 'react';
import { Nav, Container, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <hr className='mb-1' />
        <Nav className='ml-auto mb-2'>
          <NavLink
            className='ml-auto mr-2'
            href='https://darksky.net/poweredby/'
          >
            Powered by Dark Sky
          </NavLink>{' '}
          <NavLink className='mr-auto ml-2' href='#'>
            Project's Github Repo
          </NavLink>
        </Nav>
      </Container>
    </Fragment>
  );
};

export default Footer;
