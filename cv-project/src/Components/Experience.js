import React, { Component } from "react";
import ExpForm from './ExpForm';
import ShowExp from "./ShowExp";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.Experience;
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
      positionTitle: '',
      companyName: '',
      description: '',
      dateStart: '',
      dateEnd: '',
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
       <ExpForm 
       key={i} 
       index={i}
       deleteButton={this.deleteButton}
       positionTitle={tsF[i].positionTitle} 
       companyName={tsF[i].companyName} 
       description={tsF[i].description} 
       dateStart={tsF[i].dateStart} 
       dateEnd={tsF[i].dateEnd}/>
       )
      }
      // show all forms
      return <div className="Exp">
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
    <div className="Experience">
    <form>
    <input type='text' placeholder='Job title' onChange={(event)=>this.handleChange(event, "positionTitle")}/>
    <input type='text' placeholder='Company name' onChange={(event)=>this.handleChange(event, "companyName")}/>
    <input type='date' placeholder='From' onChange={(event)=>this.handleChange(event, "dateStart")}/>
    <input type='date' placeholder='To' onChange={(event)=>this.handleChange(event, "dateEnd")}/>
    <input type='text' placeholder='Main activities and responsibilities' onChange={(event)=>this.handleChange(event, "description")}/>
    <input type='button' value='Submit' onClick={this.submitForm}/>
    </form>
  </div>)
  }

  // on submit push all data to forms
  submitForm = () => {
    let forms = {
      positionTitle: this.state.positionTitle,
      companyName: this.state.companyName,
      dateStart: this.state.dateStart,
      dateEnd: this.state.dateEnd,
      description: this.state.description,
    };
    this.setState((prevState) => {
      let prevForms = prevState.forms.map(e => e);
      prevForms.push(forms);
      return {
        forms: prevForms,
        edit: 0,
      }
    })
  }

  // render preview section
  renderCv = () => {
    let forms =[];
    let tsF = this.state.forms;
    for (let i = 0; i < this.state.forms.length; i++) {
      forms.push(
        <ShowExp
        key={i} 
        positionTitle={tsF[i].positionTitle} 
        companyName={tsF[i].companyName} 
        description={tsF[i].description} 
        dateStart={tsF[i].dateStart} 
        dateEnd={tsF[i].dateEnd}/>
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
      <div className="Experience">
      <h1>Experience Information</h1>
      {this.handleRender()}
      </div>
    )
      
  }
}

export default Experience;