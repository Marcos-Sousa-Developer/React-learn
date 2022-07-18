import React, {Component} from 'react'
import './App.css';
import CounterTwo from './hooks_components/UseReducer/CounterTwo';


class App extends Component {
  render() {
    return (
  
      <div className="App">
        <CounterTwo></CounterTwo>
      </div>
    );
  }
}

export default App;
