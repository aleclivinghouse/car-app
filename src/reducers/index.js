import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import scatterReducer from './scatterReducer';

export default combineReducers({
  form: formReducer,
  scatter: scatterReducer
})
