// App.js

// import React, { Component } from "react";
import React, { useState } from 'react';
import Personal from './Components/Personal'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Preview from "./Components/preview";
import './Styles/form.css';

const App = () => {

  const [genInfo, setGenInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [eduInfo, setEduInfo] = useState({
    schoolName: '',
    studyName: '',
    studyDateStart: '',
    studyDateEnd: '',
    edit: 0,
    forms: [],
  })

  const [expInfo, setExpInfo] = useState({
    positionTitle: '',
    companyName: '',
    description: '',
    dateStart: '',
    dateEnd: '',
    edit: 0,
    forms: [],
  })

  const [showCv, setShowCv] = useState(0);
  const [button, setButton] = useState('Preview');


  const previewCv = () => {
    if (showCv === 0) {
      setShowCv(1)
      setButton('Edit Cv')
   } else {
      setShowCv(0)
      setButton('Preview')
   }
  }


    return (
    <div className="App">
      <div className="header">
        <h1>CV Application</h1>
      </div>
    <Personal Personal={genInfo} showCv={showCv}/>
    <Education Education={eduInfo} showCv={showCv}/>
    <Experience Experience={expInfo} showCv={showCv}/>
    <Preview button={previewCv} name={button}/>
    </div>
    )
}

export default App;
