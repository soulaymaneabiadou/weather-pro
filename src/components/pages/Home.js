import React, { Fragment, useContext, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Header from '../weather/Header';
import Forcast from '../weather/Forcast';

import WeatherContext from '../../context/weather/WeatherContext';

const Home = () => {
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    weatherContext.getGeolocation();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Header />
      <Forcast />
      <Footer />
    </Fragment>
  );
};

export default Home;
