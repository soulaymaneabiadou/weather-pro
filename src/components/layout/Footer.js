import React, { Fragment } from 'react';
import { Nav, Container, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <hr className='mb-0' />
        <Nav>
          <NavLink className='ml-auto' href='#'>
            Weather API
          </NavLink>{' '}
          <NavLink href='#'>Google Geocoding API</NavLink>{' '}
          <NavLink className='mr-auto' href='#'>
            Github repo
          </NavLink>
        </Nav>
      </Container>
    </Fragment>
  );
};

export default Footer;
