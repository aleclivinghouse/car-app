import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import scatterReducer from './scatterReducer';
import carsReducer from './carsReducer';

export default combineReducers({
  form: formReducer,
  scatter: scatterReducer,
  cars: carsReducer
})
