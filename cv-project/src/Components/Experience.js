import React, { Component } from "react";

class Experience extends Component {


  handleClick = (e) => {
    console.log('hi');
  }

  render() {
    return (
    <div className="Experience">
      <h1>Experience Information</h1>
        <form>
          <input type='text' placeholder='Job title'/>
          <input type='text' placeholder='Company name'/>
          <input type='date' placeholder='From'/>
          <input type='date' placeholder='To'/>
          <input type='text' placeholder='Main activities and responsibilities'/>
          <input type='button' value='Add' onClick={this.handleClick}/>
        </form>
      </div>)
      
  }
}

export default Experience;