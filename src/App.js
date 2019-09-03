import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectionFormWrapper from './components/selectionFormWrapper';
import ScatterPlot from './components/ScatterPlot';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Cards from './components/cards';
import { geolocated } from "react-geolocated";
import Makes from './components/Makes';
import Models from './components/Models';

class App extends React.Component{
  render(){
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
    <div className="App">
      <SelectionFormWrapper/>
      <ScatterPlot />
      <Cards />
      <Makes />
      <Models />
  </div>
    </Provider>
  );
 }
}

export default App;
