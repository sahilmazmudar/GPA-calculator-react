import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function getAverage(props){
  <h1> Average is: {parseInt((props.course1)+(props.course2))/2}</h1>
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstCourse: 0,
      secondCourse: 0,
      average: 0
    };
    this.handleCourse1Change = this.handleCourse1Change.bind(this);
    this.handleCourse2Change = this.handleCourse2Change.bind(this); 
  }
  
  handleCourse1Change (event) {
    this.setState({firstCourse: Number(event.target.value)});
  }

  handleCourse2Change (event) {
    this.setState({secondCourse: Number(event.target.value)});
  }

  addAction = (event) => {
    let x = (this.state.firstCourse + this.state.secondCourse)/2
    this.setState({average: x})
  }
  
  render () {
    return (
      <form>
        <label>Enter course1:
          <input value={this.state.firstCourse} 
             name="firstCourse"
             type="number"
             onChange={this.handleCourse1Change}/>
        </label>
        <label>Enter course2:
          <input value={this.state.secondCourse} 
             name="secondCourse"
             type="number"
             onChange={this.handleCourse2Change}/>
        </label> 
        <input type="button" onClick={this.addAction} value="Average"/>
        <input type='text' value={this.state.average} readOnly/>        
      </form>
    );
  }
}

export default App;
