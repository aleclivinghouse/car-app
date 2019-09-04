import axios from 'axios';
import {SEND_FORM, GET_ERRORS, FETCH_MAKES} from './types';

//0xjgQHUmuKh1YL3JeeKrIvtfF7yUtRDr
export const sendForm = data => dispatch => {
  console.log('this is the data in the action ', data);
  const url = `http://marketcheck-prod.apigee.net/v1/search?api_key=0xjgQHUmuKh1YL3JeeKrIvtfF7yUtRDr&year=${data.year}&make=${data.make}&rows=50&model=${data.model}&latitude=${data.lat}&longitude=${data.lng}&radius=${data.radius}`;
  const url2 = `http://marketcheck-prod.apigee.net/v1/search?api_key=0xjgQHUmuKh1YL3JeeKrIvtfF7yUtRDr&year=${data.year}&make=${data.make}&rows=50&start=51&model=${data.model}&latitude=${data.lat}&longitude=${data.lng}&radius=${data.radius}`;
  axios.all([
    axios.get(url, {
      headers: {
        "Content-Type": "application/json"
      }
    }),
    axios.get(
      url2, {
        headers: {
          "Content-Type": "application/json"
        }
      })
  ])
    .then(axios.spread((res1, res2) =>{
      res1.data.listings = [...res1.data.listings, ...res2.data.listings];
      console.log('this is the response ', res1.data);
      dispatch({
        type: SEND_FORM,
        payload: res1.data
      })
    }))
    .catch(err =>console.log(err));
}
