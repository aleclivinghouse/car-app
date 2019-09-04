import React from 'react';
import {Scatter} from 'react-chartjs-2';
import {connect} from 'react-redux';
import {SEND_FORM} from '../actions/types';
import {addSelectedCar} from '../actions';


class ScatterPlot extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        chartData: [],
        elements: {},
        cars: [],
        selectedCars: [],
        indexes: [],
        forHover: []
      }
  }


componentWillReceiveProps(nextProps, prevProps){

  let cars = nextProps.carData.length ? nextProps.carData[0].listings : [];
  cars = cars.filter(car => parseInt(car.price) <= parseInt(nextProps.maxPrice));
  cars = cars.filter(car => parseInt(car.miles) <= parseInt(nextProps.maxMiles));
  this.setState({cars: [...this.state.cars, ...cars]});
  const newArr = cars.map(car => ({x: car.miles, y: car.price}));
  const forHover = cars.map(car => ({year: car.build.year, make: car.build.make, model: car.build.model}));

  this.setState({forHover: [...this.state.forHover, ...forHover]});
  console.log('this is newArr nextProps', newArr[9]);
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
  let forHover = this.state.forHover;

    const theData = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Cars From Your Search',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 5,
      data: this.state.chartData
    }
  ]
};


    return(
      <div style={{width: 1000, marginLeft: 200}}>
        <Scatter data={theData} width={400}
        getElementAtEvent={(elems, event) => {this.setState({elements: elems}, ()=>{
          console.log('this is the elements', this.state.elements);
          let theIndex;
          if(this.state.elements[0] !== undefined){
           theIndex = this.state.elements[0]._index || 0;
           this.setState({indexes: [...this.state.indexes, theIndex]});

          console.log('theIndex', theIndex);
          console.log('this is the car data', this.state.cars[theIndex]);
            this.setState({selectedCars: [...this.state.selectedCars, this.state.cars[theIndex]]});
            this.props.addSelectedCar(this.state.cars[theIndex]);
          }
        })}}
         height={400} options={{responsive: true,
         maintainAspectRatio: false,
         title: {
           display: true,
           text: 'Chart.js Line Chart'
         },
         tooltips: {
           mode: 'index',
           intersect: false,
           callbacks: {
                   label: function(tooltipItem, data) {
                     console.log('foroveeeerrr', forHover, 'tolltipitemm', tooltipItem)
                   var label = forHover[tooltipItem.index] && forHover[tooltipItem.index].make + ' '+ forHover[tooltipItem.index].model + ' '+ forHover[tooltipItem.index].year;
               return label;
             }
         },
         hover: {
           mode: 'nearest',
           intersect: true
         },
         aspectRatio: 1,
         scales: {
           xAxes: [{
             display: true,
             scaleLabel: {
               display: true,
               labelString: 'Miles'
             }
           }],
           yAxes: [{
             display: true,
             scaleLabel: {
               display: true,
               labelString: 'Price'
             }
           }]
         }}}}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state in mpa state to props', state);
  return{
    carData: state.scatter.scatterPlotData,
    maxPrice: state.cars.maxPrice,
    maxMiles: state.cars.maxMiles
  };
}

export default connect(mapStateToProps, {addSelectedCar})(ScatterPlot);
