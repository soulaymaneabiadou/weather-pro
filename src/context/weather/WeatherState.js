import React, { useReducer } from 'react';
import WeatherContext from './WeatherContext';
import WeatherReducer from './WeatherReducer';
import { SET_LOCATION, SET_WEATHER } from '../types';
import keys from '../../config/keys';

const WeatherState = props => {
  const initialState = {
    location: {},
    weather: {}
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // GETTING USER ADDRESS USING GOOGLE API
  const fetchLocation = async (googleApiKey, lat, long) => {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${googleApiKey}`
      );
      const data = await res.json();
      dispatch({ type: SET_LOCATION, payload: data });
    } catch (err) {
      console.error(err);
    }
  };

  // GETTING WEATHER USING DARKSKY API
  const fetchWeatherReport = async (dsApiKey, lat, long) => {
    try {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${dsApiKey}/${lat},${long}?exclude=minutely,alerts,flags`
      );
      const data = await res.json();
      dispatch({ type: SET_WEATHER, payload: data });
    } catch (err) {
      console.error(err);
    }
  };

  // POSITION FOUND
  const positionFound = position => {
    fetchLocation(
      keys.googleApiKey,
      position.coords.latitude,
      position.coords.longitude
    );
    fetchWeatherReport(
      keys.dsKey,
      position.coords.latitude,
      position.coords.longitude
    );
  };

  // GET USER GEOLOCATION
  const getGeolocation = () => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(positionFound, null);
  };

  return (
    <WeatherContext.Provider
      value={{
        location: state.location,
        weather: state.weather,
        getGeolocation
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
