import axios from 'axios';
import {SEND_FORM, GET_ERRORS} from './types';

export const sendForm = data => dispatch => {
  axios
    .post('http://52.15.184.142:80/feedback', data)
    .then((res) =>{
      console.log('this is the response', res);
      // dispatch({
      //   type: SEND_FORM,
      //   payload: res.data
      // })
    })
    .catch(err =>
      dispatch({
         type: GET_ERRORS,
         payload: err.response.data
      })
    );
}
