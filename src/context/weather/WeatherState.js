import React, { useReducer } from 'react';
import WeatherContext from './WeatherContext';
import WeatherReducer from './WeatherReducer';
import { SET_WEATHER } from '../types';
import keys from '../../config/keys';

const WeatherState = props => {
  const initialState = {
    weather: {}
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // GETTING WEATHER USING DARKSKY API
  const fetchWeather = async position => {
    try {
      const { latitude, longitude } = position.coords;
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${keys.dsKey}/${latitude},${longitude}?units=si`
      );
      const data = await res.json();
      dispatch({ type: SET_WEATHER, payload: data });
    } catch (err) {
      console.error(err);
    }
  };

  // GET USER GEOLOCATION
  const getGeolocation = () => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(fetchWeather, null);
  };

  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        getGeolocation
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
