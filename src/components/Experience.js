import React, { Component } from 'react';
class Experience extends Component {
  render() {
    return (
      <div className="flex flex-col px-8">
       <h1 className="title" >Experience</h1>
        <div className="flex flex-col w-full">
          <div className="flex flex-wrap justify-between w-full">
              <span className="w-full md:w-1/2 pb-0 sm:pb-4">Co-operative Education, <p className="font-bold">SmileFOKUS (Thailand) Company Limited</p></span>
              <span className="date-range">June 13, 2016 to December 30, 2016</span>
          </div>
          <ul>
            <li>Brainstorm, Get Requirement</li>
            <li>Design Website</li>
            <li>Design Architecture</li>
            <li>Develop Website Application Wtih Node.js and Express.js</li>
          </ul>
          <div className="flex flex-wrap w-full">
              <span className="w-full md:w-1/2 pb-0 sm:pb-4">Automate Tester, <p className="font-bold">SmileFOKUS (Thailand) Company Limited</p></span>
              <span className="date-range">Jan 16, 2017 to May 29, 2017</span>
          </div>
          <ul>
            <li>Testing Website by Robot Framework with Python</li>          
          </ul> 
          <div className="flex flex-wrap justify-between w-full">
              <span className="w-full md:w-1/2 pb-0 sm:pb-4">Full-Stack developer, <p className="font-bold">Telemedica co, ltd. ( OOCA )</p></span>
              <span className="date-range">July 11, 2017 to Present</span>
          </div>
          <ul>
            <li>Develop all projects in OOCA</li>          
          </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
