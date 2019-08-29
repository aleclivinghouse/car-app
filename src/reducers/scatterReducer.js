import {SEND_FORM} from '../actions/types';

const initialState = {
  scatterPlotData : []
};

export default function(state=initialState, action){
  switch(action.type){
    case SEND_FORM:
    return {
      ...state,
      scatterPlotData: [action.payload, ...state.scatterPlotData]
    }
    default:
      return state;
  }
}
