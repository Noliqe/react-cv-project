import React, { Component } from "react";

class Personal extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '', 
      },
    }
  }

  handleChange = (e, field) => {
    this.setState(prevState => ({
      generalInfo: {
        // add all info so it wont be replaced by only new info
        ...prevState.generalInfo,
      [field]: e.target.value,
      }
    }));
  };
  

  render() {
    return (
    <div className="Personal">
      <h1>Personal Information</h1>
        <form>
          <input type='text' placeholder='First Name' onChange={(event)=>this.handleChange(event, "firstName")}/>
          <input type='text' placeholder='Last Name' onChange={(event)=>this.handleChange(event, "lastName")}/>
          <input type='text' placeholder='Email' onChange={(event)=>this.handleChange(event, "email")}/>
          <input type='tel' placeholder='1234567890' onChange={(event)=>this.handleChange(event, "phoneNumber")}/>
        </form>
      </div>)
  }
}

export default Personal;