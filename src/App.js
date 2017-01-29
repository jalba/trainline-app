import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DeparturesList from './components/DeparturesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Departures From Waterloo Station</h2>
        </div>
        <DeparturesList />
      </div>
    );
  }
}

export default App;