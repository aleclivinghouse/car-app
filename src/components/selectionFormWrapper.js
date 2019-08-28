import React, {Component} from 'react';
import SelectionForm from './selectionForm';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
// google api
//AIzaSyD8pHSBiK0WRs4rZxyBem5I5nrWKhJ9mG0
import {sendForm} from '.././actions/sendActions';

class FormWrapper extends Component{
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      radius: ''
    }
  }

  componentDidMount(){
    axios.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD8pHSBiK0WRs4rZxyBem5I5nrWKhJ9mG0", {})
    .then(res => this.setState({location: res.data.location}));
  }

  handleSubmit = values => {
    let submission = Object.values(values);
    //console.log('this is the submission', submission);
    let cars = submission[1];
    console.log(cars, 'the cars');
    this.setState({radius: submission[0]}, () => {
      for(let car of cars){
        let newObj = {};
        console.log(car);
        newObj.make = car.Make.toLowerCase();
        newObj.model = car.Model.toLowerCase();
        newObj.year = car.Date;
        newObj.radius = this.state.radius;
        newObj.lat = this.state.location.lat;
        newObj.lng = this.state.location.lng;
        console.log('this is the new object', newObj);
         this.props.sendForm(newObj);
      }
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

export default connect(null, {sendForm})(FormWrapper);
