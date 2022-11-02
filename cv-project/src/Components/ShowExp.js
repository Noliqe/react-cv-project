import React, { Component } from "react";

class ShowExp extends Component {

  // handle error
  inputChangedHandler = (event) => {
    // eslint-disable-next-line no-unused-vars
    const updatedKeyword = event.target.value;
}

  render() {
    return (
      <div className="EperienceCv">
        <div>
            <div>
                <label className="label">Job title :</label> <label> {this.props.positionTitle} </label>
            </div>
            <div>
                <label className="label">Company name : </label> <label>{this.props.companyName} </label>
            </div>
            <div>
                <label className="label">From : </label><label>{this.props.dateStart} </label>
            </div>
            <div>
                <label className="label">To : </label> <label>{this.props.dateEnd} </label>
            </div>
            <div>
                <label className="label">Main activities and responsibilities : </label> <label>{this.props.description} </label>
            </div>
        </div>
    </div>
    )
  }
}

export default ShowExp;