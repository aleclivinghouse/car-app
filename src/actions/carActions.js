import {ADD_SELECTED_CAR, DELETE_CARD} from './types';


export const addSelectedCar = car => {
  return{
    type: ADD_SELECTED_CAR,
    payload: car
  };
};

export const deleteCard = car => {
  return {
  type: DELETE_CARD,
  payload: car.vin
  };
};
