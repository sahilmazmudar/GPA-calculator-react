import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      course1: '',
      credits1: '',
      course2: '',
      credits2: '',
      course3: '',
      credits3: '',
      course4: '',
      credits4: '',
      course5: '',
      credits5: '',
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
    let rawTotal = (this.state.course1*this.state.credits1) + 
                      (this.state.course2*this.state.credits2) +
                      (this.state.course3*this.state.credits3) + 
                      (this.state.course4*this.state.credits4) +
                      (this.state.course5*this.state.credits5)
    let totalCredits = this.state.credits1+this.state.credits2+this.state.credits3+this.state.credits4+this.state.credits5
    let wightedAverage = rawTotal/totalCredits
    this.setState({average: wightedAverage})
  }
  
  weightedAverage = (event) => {

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
          </label>
          <label>Enter credits for course1:
            <input value={this.state.credits1} 
               name="credits1"
               type="text"
               onChange={this.handleChange}/>
          </label><br/>
          <label>Enter course2:
            <input value={this.state.course2} 
               name="course2"
               type="text"
               onChange={this.handleChange}/>
          </label>
          <label>Enter credits for course2:
            <input value={this.state.credits2} 
               name="credits2"
               type="text"
               onChange={this.handleChange}/>
          </label><br/>
          <label>Enter course3:
            <input value={this.state.course3} 
               name="course3"
               type="text"
               onChange={this.handleChange}/>
          </label>
          <label>Enter credits for course3:
            <input value={this.state.credits3} 
               name="credits3"
               type="text"
               onChange={this.handleChange}/>
          </label><br/>
          <label>Enter course4:
            <input value={this.state.course4} 
               name="course4"
               type="text"
               onChange={this.handleChange}/>
          </label>
          <label>Enter credits for course4:
            <input value={this.state.credits4} 
               name="credits4"
               type="text"
               onChange={this.handleChange}/>
          </label><br/>
          <label>Enter course5:
            <input value={this.state.course5} 
               name="course5"
               type="text"
               onChange={this.handleChange}/>
          </label>
          <label>Enter credits for course5:
            <input value={this.state.credits5} 
               name="credits5"
               type="text"
               onChange={this.handleChange}/>
          </label><br/>      
        </form>
        <input type="button" onClick={this.averageAction} value="Average"/>
        <input type='text' value={this.state.average} readOnly/> 
      </div>       
    );
  }
}

export default App;
