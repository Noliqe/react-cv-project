// App.js

import React, { Component } from "react";
import Personal from './Components/Personal'
import Education from './Components/Education'
import Experience from './Components/Experience'
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
      }
    };
  }



  render() {
    return (
    <div className="App">
    <h1>Hello World</h1>
    <Personal Personal={this.state.generalInfo}/>
    <Education Education={this.state.educationalInfo}/>
    <Experience Experience={this.state.experienceInfo}/>
    </div>
    )
  }
}

export default App;
