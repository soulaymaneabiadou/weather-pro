import { SET_LOCATION, SET_WEATHER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };

    case SET_WEATHER:
      return {
        ...state,
        weather: action.payload
      };

    default:
      return state;
  }
};
