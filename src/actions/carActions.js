import {ADD_SELECTED_CAR, DELETE_CARD, ADD_MAX_MILES, ADD_MAX_PRICE} from './types';


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

export const maxMiles = miles => {
  console.log('maxMiles in action', miles)
  return {
    type: ADD_MAX_MILES,
    payload: miles.value
  };
};

export const maxPrice = price => {
  console.log("maxPrice in action", price.value);
  return {
    type: ADD_MAX_PRICE,
    payload: price.value
  };
};
