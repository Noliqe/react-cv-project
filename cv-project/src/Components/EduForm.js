import React, { Component } from "react";

class EduForm extends Component {

  inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;

}

// value should be forms{i}
  render() {
    return (
      <div className="Education">
      <form>
      <input type='text' placeholder='Education title' value={this.props.studyName} onChange={(event)=>this.inputChangedHandler(event)}/>
      <input type='text' placeholder='School name' value={this.props.schoolName} onChange={(event)=>this.inputChangedHandler(event)}/>
      <input type='date' placeholder='From' value={this.props.studyDateStart} onChange={(event)=>this.inputChangedHandler(event)}/>
      <input type='date' placeholder='To' value={this.props.studyDateEnd} onChange={(event)=>this.inputChangedHandler(event)}/>
      {/* <input type='button' value='Submit' onClick={this.submitForm}/> */}
      </form>
    </div>
    )
  }
}

export default EduForm;