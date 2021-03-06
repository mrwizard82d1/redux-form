import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleForm from './SimpleForm';
import showResults from './showResults';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SimpleForm onSubmit={showResults} />
      </div>
    );
  }
}

export default App;
