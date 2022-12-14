import React, { Component } from "react";
import EduForm from './EduForm'
import ShowEdu from "./ShowEdu";

class Education extends Component {

  constructor(props) {
    super(props);

    this.state = this.props.Education;
  }

  // modify state with field(target) and it's value
  handleChange = (e, field) => {
    this.setState({
      [field]: e.target.value,
      })
  };

  // delete form with its correlation index
  deleteButton = (index) => {
    this.setState((prevState) => {
      let prevForms = prevState.forms.map(e => e);
      console.log(prevState);
      prevForms.splice(index, 1);
      return {
        forms: prevForms
      }
    })
    this.clearState();
 }

  // clear state list, prevents autofill forms
  clearState = () => {
    this.setState({ 
      schoolName: '',
      studyName: '',
      studyDateStart: '',
      studyDateEnd: '',
     })
  }


  // if forms is empty show only button else show all forms
  showButton = () => {
    let addButton = <input type='button' value='Add' onClick={this.changeEdit}/>;
    // if forms is empty only show add button
    if (this.state.forms.length === 0) {
      return addButton
    } else { // if forms not empty show all forms
      let forms =[];
      let tsF = this.state.forms;
      // array loop and send form data as props
      for (let i = 0; i < this.state.forms.length; i++) {
       forms.push(
       <EduForm 
        key={i} 
        index={i} 
        deleteButton={this.deleteButton} 
        studyName={tsF[i].studyName} 
        schoolName={tsF[i].schoolName} 
        studyDateStart={tsF[i].studyDateStart} 
        studyDateEnd={tsF[i].studyDateEnd}/>
        )
      }
      // show all forms
      return <div className="Edu">
        {forms}
        {addButton}
      </div>
    }
  }

  
  changeEdit = () => {
    this.setState({ edit: 1 });
  }

  // render new form which can be filled in
  renderForm = () => {
  return (
    <div className="form">
    <form>
    <input type='text' placeholder='Education title' onChange={(event)=>this.handleChange(event, "studyName")}/>
    <input type='text' placeholder='School name' onChange={(event)=>this.handleChange(event, "schoolName")}/>
    <input type='date' placeholder='From' onChange={(event)=>this.handleChange(event, "studyDateStart")}/>
    <input type='date' placeholder='To' onChange={(event)=>this.handleChange(event, "studyDateEnd")}/>
    <input type='button' value='Submit' onClick={this.submitForm}/>
    </form>
  </div>)
  }

  // on submit push all data to forms
  submitForm = () => {
    let forms = {
      schoolName: this.state.schoolName,
      studyName: this.state.studyName,
      studyDateStart: this.state.studyDateStart,
      studyDateEnd: this.state.studyDateEnd,
    };
    this.setState((prevState) => {
      let prevForms = prevState.forms.map(e => e);
      prevForms.push(forms);
      return {
        forms: prevForms,
        edit: 0,
      }
    })
    this.clearState();
  }

  // render preview section
  renderCv = () => {
    let forms =[];
    let tsF = this.state.forms;
    for (let i = 0; i < this.state.forms.length; i++) {
      forms.push(
      <ShowEdu
       key={i}
       studyName={tsF[i].studyName} 
       schoolName={tsF[i].schoolName} 
       studyDateStart={tsF[i].studyDateStart} 
       studyDateEnd={tsF[i].studyDateEnd}/>
       )
     }
     return <div className="Edu">
       {forms}
     </div>
  }

  // if edit = 0 show add button else show only form with submit button
  handleRender = () => {
    if (this.state.edit === 0 && this.props.showCv === 0) {
      return this.showButton();
    } else if (this.state.edit === 1 && this.props.showCv === 0) {
      return this.renderForm();
    } else if (this.props.showCv === 1) {
      return this.renderCv();
    }
  }


  render() {
    return (
    <div className="Education">
      <h1>Education Information</h1>
      {this.handleRender()}
      </div>)
  }
}

export default Education;