import React, { Component } from "react";

class ShowEdu extends Component {

  // handle error
  inputChangedHandler = (event) => {
    // eslint-disable-next-line no-unused-vars
    const updatedKeyword = event.target.value;
}

  render() {
    return (
      <div className="EducationCv">
        <div>
            <div>
                <label className="label">Education title :</label> <label> {this.props.studyName} </label>
            </div>
            <div>
                <label className="label">School name : </label> <label>{this.props.schoolName} </label>
            </div>
            <div>
                <label className="label">From : </label><label>{this.props.studyDateStart} </label>
            </div>
            <div>
                <label className="label">To : </label> <label>{this.props.studyDateEnd} </label>
            </div>
        </div>
    </div>
    )
  }
}

export default ShowEdu;