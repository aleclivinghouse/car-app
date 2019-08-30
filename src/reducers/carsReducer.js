import {ADD_SELECTED_CAR} from '../actions/types';

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
    default:
      return state;
  }
}
