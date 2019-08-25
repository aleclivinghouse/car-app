import React, {Component} from 'react';
import SelectionForm from './selectionForm';
import {connect} from 'react-redux';

import {sendForm} from '.././actions/sendActions';

class FormWrapper extends Component{
  handleSubmit = values => {
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
    return(
      <SelectionForm onSubmit={this.handleSubmit}/>
    );
  }
}
// const mapStateToProps = state => ({
//   returnMessage: state.send.returnMessage
// })

export default connect(null, {sendForm})(FormWrapper);
