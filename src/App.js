import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectionFormWrapper from './components/selectionFormWrapper';
import ScatterPlot from './components/ScatterPlot';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { geolocated } from "react-geolocated";


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
    }
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition(position => {
      console.log('this is the [position]', position);
      this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
    }, err => console.log(err)
    );
  }
  render(){
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
    <div className="App">
      <SelectionFormWrapper latitude={this.state.lat} longitude={this.state.long}/>
      <ScatterPlot />
  </div>
    </Provider>
  );
 }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: null,
})(App);
