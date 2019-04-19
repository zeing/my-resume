import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import LanguageSkills from './components/LanguageSkills';
import Education from './components/Education';
import Interests from './components/Interests';

class App extends Component {
  render() {
    return (
      <div className="flex flex-wrap py-8 page">
        <div className="w-full md:w-1/3">
          <div className="mb-4">
            <Profile></Profile>
          </div>
          <div className="mb-4">
            <TechnicalSkills></TechnicalSkills>
          </div>
          <div className="mb-4">
            <LanguageSkills></LanguageSkills>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="mb-4">
            <Experience></Experience>
          </div>
          <div className="mb-4">
            <Education></Education>
          </div>
          <div className="mb-4">
            <Interests/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
