import React from 'react';
// IMPORTING COMPONENTS
import Home from './components/pages/Home';
// IMPORTING THE CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import WeatherState from './context/weather/WeatherState';

const App = () => {
  return (
    <WeatherState>
      <Home />
    </WeatherState>
  );
};

export default App;
