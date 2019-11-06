import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Header from '../weather/Header';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />

      <Footer />
    </Fragment>
  );
};

export default Home;
