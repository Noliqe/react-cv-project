import React, { Component } from "react";

class EduForm extends Component {

  // handle error
  inputChangedHandler = (event) => {
    // eslint-disable-next-line no-unused-vars
    const updatedKeyword = event.target.value;
}

  render() {
    return (
      <div className="form">
      <form>
      <input type='text' placeholder='Education title' value={this.props.studyName} onChange={(event)=>this.inputChangedHandler(event)}/>
      <input type='text' placeholder='School name' value={this.props.schoolName} onChange={(event)=>this.inputChangedHandler(event)}/>
      <input type='date' placeholder='From' value={this.props.studyDateStart} onChange={(event)=>this.inputChangedHandler(event)}/>
      {/* <div className="range">  */}
      <input type='date' placeholder='To' value={this.props.studyDateEnd} onChange={(event)=>this.inputChangedHandler(event)}/> 
            {/* <div className="rangeSub">
            <p>Ongoing:</p>
            <input type="range" min="1" max="2" value="1"/>
            </div>
            </div> */}
      <input id="delButton" type='button' value='Delete' onClick={()=>this.props.deleteButton(this.props.index)}/>
      </form>
    </div>
    )
  }
}

export default EduForm;