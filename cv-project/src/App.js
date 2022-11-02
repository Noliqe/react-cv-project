// App.js

import React, { Component } from "react";
import Personal from './Components/Personal'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Preview from "./Components/preview";
import './Styles/form.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      },
      educationalInfo: {
        schoolName: '',
        studyName: '',
        studyDateStart: '',
        studyDateEnd: '',
        edit: 0,
        forms: [],
      },
      experienceInfo: {
        positionTitle: '',
        companyName: '',
        description: '',
        dateStart: '',
        dateEnd: '',
        edit: 0,
        forms: [],
      },
      showCv: 0,
      button: 'Preview',
    }
  }

  previewCv = () => {
    if (this.state.showCv === 0) {
      this.setState({
        showCv: 1,
        button: 'Edit Cv'
      })
   } else {
    this.setState({
      showCv: 0,
      button: 'Preview'
    })
   }
  }


  render() {
    return (
    <div className="App">
      <div className="header">
        <h1>CV Application</h1>
      </div>
    <Personal Personal={this.state.generalInfo} showCv={this.state.showCv}/>
    <Education Education={this.state.educationalInfo} showCv={this.state.showCv}/>
    <Experience Experience={this.state.experienceInfo} showCv={this.state.showCv}/>
    <Preview button={this.previewCv} name={this.state.button}/>
    </div>
    )
  }
}

export default App;
