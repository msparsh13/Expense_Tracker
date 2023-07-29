import React, { Component } from 'react';  
import DatePicker from 'react-datepicker';  
   
import "react-datepicker/dist/react-datepicker.css";  

  
class Calender extends Component {  
  
  constructor (props) {  
    super(props)  
    this.state = {  
      startDate: new Date()  
    };  
    this.handleChange = this.handleChange.bind(this);  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  }  
  
  handleChange(date) {  
    this.setState({  
      startDate: date  
    })  
  }  
  
  onFormSubmit(e) {  
    e.preventDefault();  
    console.log(this.state.startDate)  
  }  
   
  render() {  
    return (  
      <div onSubmit={ this.onFormSubmit }>  
        <div className="form-group">  
          <DatePicker  
          strictMode = {this.disabled}
              selected={ this.state.startDate }  
              onChange={ this.handleChange }  
              name="startDate"  
              dateFormat="dd/MM/yyyy"  
          />  
          <button className="btn btn-primary">Show Date</button>  
        </div>  
      </div>  
    );  
  }  
    
}  
  
export default Calender;  