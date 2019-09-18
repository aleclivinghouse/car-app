import React, {Component} from 'react';
import SelectionForm from './selectionForm';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import {maxPrice, maxMiles} from '../actions';
import {sendForm} from '.././actions/sendActions';
require('dotenv').config();

class FormWrapper extends Component{
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      radius: ''
    }
  }

  componentDidMount(){
    console.log('geo', process.env.REACT_APP_GEO_URL);
    axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_GEO_URL}`, {})
    .then(res => this.setState({location: res.data.location}));
  }

  handleSubmit = values => {
    console.log(values, 'handleSubmit');
    let submission = Object.values(values);
    //console.log('this is the submission', submission);
    console.log('these are the values of submission', submission);
    this.props.maxMiles(submission[2]);
    this.props.maxPrice(submission[1]);
    let cars = submission[3];
    console.log('theCars', cars);
    this.setState({radius: submission[0]}, () => {


      cars.map((car) => {
        let years = ["2000", "2001", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
        let firstYear;
        let secondYear;
        let firstYearIndex;
        let secondYearIndex;
        let yearsSelected  = [];
        for(let i = 0; i < years.length; i++){
          if(years[i] === car.Date1.value){
            console.log('firing');
            firstYearIndex = i;
          }
          if(years[i] === car.Date2.value){
            console.log('firing');
            secondYearIndex = i +1;
          }
        }
         yearsSelected = years.slice(firstYearIndex, secondYearIndex);
          let yearsString="";
         for(let i = 0; i<yearsSelected.length; i++){
           console.log('yearsSelected[i]', yearsSelected[i]);
           yearsString += yearsSelected[i] +",";
         }
         yearsString = yearsString.substring(0, yearsString.length - 1);
         console.log('this is yearsString', yearsString);

        let newObj = {};
        console.log('this is the car from the form ', car);
        newObj.make = car.Make.value.toLowerCase();
        newObj.model = car.Model.value;
        newObj.year = yearsString;
        newObj.radius = this.state.radius.value;
        newObj.lat = this.state.location.lat;
        newObj.lng = this.state.location.lng;
        console.log('this is the new object', newObj);
         this.props.sendForm(newObj);
      });
    });
  }

  render(){
    console.log(this.state.location, 'the location');
    return(
      <MuiThemeProvider>
      <SelectionForm onSubmit={this.handleSubmit}/>
      </MuiThemeProvider>
    );
  }
}
// const mapStateToProps = state => ({
//   returnMessage: state.send.returnMessage
// })

export default connect(null, {sendForm, maxMiles, maxPrice})(FormWrapper);
