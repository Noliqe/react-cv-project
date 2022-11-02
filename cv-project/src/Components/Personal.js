import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.Personal;
  }


  // modify state with field(target) and it's value
  handleChange = (e, field) => {
    this.setState({
      [field]: e.target.value,
      })
  };

  renderForm = () => {
    return (
      <div className="form">
          <form>
            <input type='text' placeholder='First Name' value={this.state.firstName} onChange={(event)=>this.handleChange(event, "firstName")}/>
            <input type='text' placeholder='Last Name' value={this.state.lastName} onChange={(event)=>this.handleChange(event, "lastName")}/>
            <input type='text' placeholder='Email'value={this.state.email}  onChange={(event)=>this.handleChange(event, "email")}/>
            <input type='tel' placeholder='1234567890' value={this.state.phoneNumber} onChange={(event)=>this.handleChange(event, "phoneNumber")}/>
          </form>
        </div>)
  }

  // render preview section
  renderCv = () => {
    return (
      <div className="PersonalCv">
        <div>
            <div>
                <label className="label">First Name : </label> <label> {this.state.firstName} </label>
            </div>
            <div>
                <label className="label">Last name : </label> <label>{this.state.lastName} </label>
            </div>
            <div>
                <label className="label">Email : </label><label>{this.state.email} </label>
            </div>
            <div>
                <label className="label">Phone number : </label> <label>{this.state.phoneNumber} </label>
            </div>
        </div>
    </div>
    )
  }
  
  
  handleRender = () => {
    if (this.props.showCv === 0) {
      return this.renderForm();
    } else {
      return this.renderCv();
    }
  }

  render() {
    return (
      <div className="Personal">
        <h1>Personal Information</h1>
        {this.handleRender()}
      </div>
    )
  }
}

export default Personal;