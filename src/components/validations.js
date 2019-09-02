const validate = values => {
  console.log("these are the values", values);
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
  const carsArrayErrors = [];
    values.members.forEach((car, carIndex)=> {
      let carErrors = {};
    if (!car || !car.Make) {
        carErrors.Make = 'Required';
        carsArrayErrors[carIndex] = carErrors;
      }
      if (!car || !car.Model) {
          carErrors.Model= 'Required';
          carsArrayErrors[carIndex] = carErrors;
        }
        if (!car || !car.Date1) {
            carErrors.Date1= 'Required';
            carsArrayErrors[carIndex] = carErrors;
          }
        if (!car || !car.Date2) {
              carErrors.Date2= 'Required';
              carsArrayErrors[carIndex] = carErrors;
          }
  });
  if(carsArrayErrors.length){
    errors.cars = carsArrayErrors;
  }
  return errors;
}

export default validate;
