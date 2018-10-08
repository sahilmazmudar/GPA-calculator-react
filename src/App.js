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
      course1: '',
      course2: '',
      course3: '',
      course4: '',
      course5: '',
      average: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (event) {
    this.setState({
      [event.target.name]: Number(event.target.value)
    });
  }

  averageAction = (event) => {
    let x = (this.state.course1 + this.state.course2 + this.state.course3 + this.state.course4 + this.state.course5)/5
    this.setState({average: x})
  }
  
  render () {  
    return (
      <div>
        <form>
          <label>Enter course1:
            <input value={this.state.course1} 
               name="course1"
               type="text"
               onChange={this.handleChange}/>
          </label><br/>
          <label>Enter course2:
            <input value={this.state.course2} 
               name="course2"
               type="text"
               onChange={this.handleChange}/>
          </label><br/>
          <label>Enter course3:
            <input value={this.state.course3} 
               name="course3"
               type="text"
               onChange={this.handleChange}/>
          </label><br/>
          <label>Enter course4:
            <input value={this.state.course4} 
               name="course4"
               type="text"
               onChange={this.handleChange}/>
          </label><br/>
          <label>Enter course5:
            <input value={this.state.course5} 
               name="course5"
               type="text"
               onChange={this.handleChange}/>
          </label>          
        </form>
        <input type="button" onClick={this.averageAction} value="Average"/>
        <input type='text' value={this.state.average} readOnly/> 
      </div>       
    );
  }
}

export default App;
