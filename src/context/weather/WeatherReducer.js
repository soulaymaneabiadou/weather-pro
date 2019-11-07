import { SET_WEATHER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: action.payload
      };

    default:
      return state;
  }
};
