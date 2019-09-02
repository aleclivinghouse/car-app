import axios from 'axios';
import {SEND_FORM, GET_ERRORS} from './types';

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


// curl --location --request GET "http://api.marketcheck.com/v1/search?api_key={{api_key}}&year=2014&make=ford&latitude=34.05&longitude=-118.24&radius=100&car_type=used&start=0&rows=2&seller_type=dealer" \
//   --header "Host: marketcheck-prod.apigee.net" \
//   --data ""
