import {ADD_SELECTED_CAR, DELETE_CARD, ADD_MAX_MILES, ADD_MAX_PRICE} from '../actions/types';

const initialState = {
  selectedCars : [],
  maxMiles: {},
  maxPrice: {}
};

export default function(state=initialState, action){

  switch(action.type){
    case ADD_SELECTED_CAR:
    return{
      ...state,
      selectedCars: [action.payload, ...state.selectedCars]
    }
    case DELETE_CARD:
    return{
      ...state,
      selectedCars: state.selectedCars.filter(item => item.vin !== action.payload)
    }
    case ADD_MAX_MILES:
    return{
      ...state,
      maxMiles: action.payload
    }
    case ADD_MAX_PRICE:
    return{
      ...state,
      maxPrice: action.payload
    }
    default:
      return state;
  }
}
