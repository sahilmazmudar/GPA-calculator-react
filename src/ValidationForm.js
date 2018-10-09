import React, { Component } from "react";

export default class ValidationForm extends React.Component{
	state = {
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
		average: 0,
		gradeError: '',
		creditError: ''
    };

	handleChange = (event) => {
		this.setState({
		  [event.target.name]: Number(event.target.value)
		});
	}

	validate = () => {
		let gradeError= '';
		let creditsError= '';

		if (this.state.course1 > 100){
			gradeError = "Grade should be between 0 and 100";
		}
		else{
			gradeError = "";
		}

		if(gradeError){
			this.setState({gradeError: "Grade should be between 0 and 100" });
			return false;
		}
		return true;
	}

	averageAction = (event) => {
		let rawTotal = (this.state.course1*this.state.credits1) + 
		                  (this.state.course2*this.state.credits2) +
		                  (this.state.course3*this.state.credits3) + 
		                  (this.state.course4*this.state.credits4) +
		                  (this.state.course5*this.state.credits5)
		let totalCredits = this.state.credits1+this.state.credits2+this.state.credits3+this.state.credits4+this.state.credits5
		let weightedAverage = rawTotal/totalCredits
		const isValid = this.validate();
		if (isValid){
			this.setState({average: weightedAverage});
		}
	}

	render () {  
		return (
		  <div>
		    <form >
		      <label>Course 1 grade:
		        <input value={this.state.course1} 
		           name="course1"
		           type="text"
		           onChange={this.handleChange}/>
		      </label>
		      <label>Course 1 credits:
		        <input value={this.state.credits1} 
		           name="credits1"
		           type="text"
		           onChange={this.handleChange}/>
		      </label>
		      <div>{this.state.gradeError}</div><br/>
		      <label>Course 2 grade:
		        <input value={this.state.course2} 
		           name="course2"
		           type="text"
		           onChange={this.handleChange}/>
		      </label>
		      <label>Course 2 credits:
		        <input value={this.state.credits2} 
		           name="credits2"
		           type="text"
		           onChange={this.handleChange}/>
		      </label><br/>
		      <label>Course 3 grade:
		        <input value={this.state.course3} 
		           name="course3"
		           type="text"
		           onChange={this.handleChange}/>
		      </label>
		      <label>Course 3 credits:
		        <input value={this.state.credits3} 
		           name="credits3"
		           type="text"
		           onChange={this.handleChange}/>
		      </label><br/>
		      <label>Course 4 grade:
		        <input value={this.state.course4} 
		           name="course4"
		           type="text"
		           onChange={this.handleChange}/>
		      </label>
		      <label>Course 4 credits:
		        <input value={this.state.credits4} 
		           name="credits4"
		           type="text"
		           onChange={this.handleChange}/>
		      </label><br/>
		      <label>Course 5 grade:
		        <input value={this.state.course5} 
		           name="course5"
		           type="text"
		           onChange={this.handleChange}/>
		      </label>
		      <label>Course 5 credits:
		        <input value={this.state.credits5} 
		           name="credits5"
		           type="text"
		           onChange={this.handleChange}/>
		      </label><br/>      
		    </form>
		    <input type="button" onClick={this.averageAction} value="Average"/>
		    <input type='text' value={parseFloat(this.state.average).toFixed(2)} readOnly/> 
		  </div>       
		);
	}
}