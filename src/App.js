import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectionFormWrapper from './components/selectionFormWrapper';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

class App extends React.Component{
  render(){
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
    <div className="App">
      <SelectionFormWrapper/>
    </div>
    </Provider>
  );
 }
}

export default App;
