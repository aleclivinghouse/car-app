import {ADD_SELECTED_CAR, DELETE_CARD} from '../actions/types';

const initialState = {
  selectedCars : []
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
    default:
      return state;
  }
}
