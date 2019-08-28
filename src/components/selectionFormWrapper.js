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
      location: {}
    }
  }

  componentDidMount(){
    axios.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD8pHSBiK0WRs4rZxyBem5I5nrWKhJ9mG0", {})
    .then(res => this.setState({location: res.data.location}));
  }

  handleSubmit = values => {
    let start = Object.values(values)[0];
    console.log('this is the submission',  Object.values(values));
    let theValues = Object.values(values);
    let str = '';
    for(let item of theValues){
      str+= item + ' ';
    }
    alert('here are the form values ' + str);
    console.log('values', values);
    this.props.sendForm(values);
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
