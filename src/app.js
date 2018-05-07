import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bleh from './components/testing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is where it all is
        </p>
        <Bleh />
      </div>
    );
  }

}

export default App;
