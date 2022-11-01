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
        companyName: '',
        positionTitle: '',
        description: '',
        date: '',
      }
    };
  }



  render() {
    return (
    <div className="App">
    <h1>Hello World</h1>
    <Personal/>
    <Education Education={this.state.educationalInfo}/>
    <Experience/>
    </div>
    )
  }
}

export default App;
