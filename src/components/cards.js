import React from 'react';
import {connect} from 'react-redux';
import * as contentful from 'contentful';
import Grid from '@material-ui/core/Grid';
import CardItem from './card';
import Button from '@material-ui/core/Button';


class Cards extends React.Component{
  render(){

    let cars = this.props.cars;
    console.log('this is the cars ', cars);
    const theCars = cars.map((car) =>
      <li>{car.price}</li>
  );
    return(
      <div>
        <Grid container spacing={24} style={{padding: 24}}>
          {cars.map(car => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <CardItem car={car}/>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mstp', state);
  return {
    cars: state.cars.selectedCars
  }
};


export default connect(mapStateToProps, null)(Cards);
