import React from 'react';
import {connect} from 'react-redux';


class Cards extends React.Component{
  render(){
    let {cars} = this.props;
    const theCars = cars.map((car) =>
      <li>{car.price}</li>
  );
    return(
      <div>
      cars
      <ul>
        {theCars}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars.selectedCars,
  }
};


export default connect(mapStateToProps, null)(Cards);
