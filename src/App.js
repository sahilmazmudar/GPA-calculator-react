import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationForm from "./ValidationForm";

class App extends Component {
  state = {
    visible: true
  };  

  render () {  
    return (
      <div className="App">
        <ValidationForm/>
      </div>
    );
  }
}

export default App;
