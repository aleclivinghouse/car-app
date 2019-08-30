import {ADD_SELECTED_CAR} from './types';


export const addSelectedCar = car => {
  return{
    type: ADD_SELECTED_CAR,
    payload: car
  };
};
