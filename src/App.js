// src/App.js
import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import References from './components/References';  
import SocialLinks from './components/SocialLinks';  
import './App.css';

const App = () => {
  return (
    <div className="cv-container">
      <PersonalInfo />
      <Education />
      <Experience />
      <Skills />
      <Hobbies />
      <References />
      <SocialLinks />
    </div>
  );
};

export default App;
