import React from 'react';
import {Scatter} from 'react-chartjs-2';
import {connect} from 'react-redux';
import {SEND_FORM} from '../actions/types';


class ScatterPlot extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        chartData: [],
      }
  }


componentWillReceiveProps(nextProps, prevProps){
  const cars = nextProps.carData.length ? nextProps.carData[0].listings : [];
  const newArr = cars.map(car => ({x: car.price, y: car.miles}));
  console.log('this is newArr nextProps', newArr);
  if(Object.keys(this.state.chartData).length===0){
    this.setState({chartData: newArr});
  } else {
    console.log('this is firing');
    console.log('chart data before', this.state.chartData);
    this.setState({chartData: [...this.state.chartData, ...newArr]}, ()=>{
        console.log('chart data after', this.state.chartData);
    });

 }
}


  render(){
    // const cars = this.props.carData.length ? this.props.carData[0].listings : [];
    //
    // console.log('these are the cars', cars);
    //
    // const newArr = cars.map(car => ({x: car.price, y: car.miles}))
    // console.log('this is newArr', newArr);
    //
    // this.setState({chartData: newArr});

    const data = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 10,
      pointHitRadius: 50,
      data: this.state.chartData
    }
  ]
};

    return(
      <div style={{width: 600, marginLeft: 200}}>
        <Scatter data={data} width={400}
         height={300} options={{ maintainAspectRatio: false }}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state in mpa state to props', state);
  return{
    carData: state.scatter.scatterPlotData
  }
}

export default connect(mapStateToProps)(ScatterPlot);
