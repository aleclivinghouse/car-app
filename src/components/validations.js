const validate = values => {
  console.log("these are the values in validation", values);
  const errors = {};
  if(!values.radius){
    errors.radius = "Required"
  }
  if(!values.price){
    errors.price = "Required"
  }
  if(!values.miles){
    errors.miles = "Required"
  }
  if(!values.members || !values.members.length || !values.members[0].Make){
    errors.members = { _error: 'At least one member must be entered' };
  } else {
    const membersArrayErrors = [];
    values.members.forEach((car, index)=> {
     if(!car.Make || !car.Model || !car.Date1 || !car.Date2){
       errors.members = { _error: 'Car fields must be filled' };
     }
  });
  if(membersArrayErrors.length){
    console.log(membersArrayErrors, 'memberArrayErrors');
      errors.members = membersArrayErrors;
  }
}
  return errors;
}

export default validate;
