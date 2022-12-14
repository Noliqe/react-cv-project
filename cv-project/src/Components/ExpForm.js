import React, { Component } from "react";

class ExpForm extends Component {

  // handle error
  inputChangedHandler = (event) => {
    // eslint-disable-next-line no-unused-vars
    const updatedKeyword = event.target.value;

}

  render() {
    return (
        <div className="form">
          <form>
            <input type='text' placeholder='Job title' value={this.props.positionTitle} onChange={(event)=>this.inputChangedHandler(event)}/>
            <input type='text' placeholder='Company name' value={this.props.companyName} onChange={(event)=>this.inputChangedHandler(event)}/>
            <input type='date' placeholder='From' value={this.props.dateStart} onChange={(event)=>this.inputChangedHandler(event)}/>
            {/* <div className="range">  */}
            <input type='date' placeholder='To' value={this.props.dateEnd} onChange={(event)=>this.inputChangedHandler(event)}/> 
            {/* <div className="rangeSub">
            <p>Ongoing:</p>
            <input type="range" min="1" max="2" value="1"/>
            </div>
            </div> */}
            <input type='text' placeholder='Main activities and responsibilities' value={this.props.description} onChange={(event)=>this.inputChangedHandler(event)}/>
            <input id="delButton" type='button' value='Delete' onClick={()=>this.props.deleteButton(this.props.index)}/>
          </form>
        </div>
    )
  }
}

export default ExpForm;