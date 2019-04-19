import React, { Component } from 'react';
class Experience extends Component {
  render() {
    return (
      <div className="flex flex-col px-8">
       <h1 className="title" >Experience</h1>
        <div className="flex flex-col">
          <div className="flex justify-between w-full">
              <span className="">Co-operative Education, <p className="font-bold">SmileFOKUS (Thailand) Company Limited</p></span>
              <span>June 13, 2016 to December 30, 2016</span>
          </div>
          <ul>
            <li>Brainstorm, Get Requirement</li>
            <li>Design Website</li>
            <li>Design Architecture</li>
            <li>Develop Website Application Wtih Node.js and Express.js</li>
          </ul>
          <div className="flex justify-between w-full">
              <span className="">Automate Tester, <p className="font-bold">SmileFOKUS (Thailand) Company Limited</p></span>
              <span>Jan 16, 2017 to May 29, 2017</span>
          </div>
          <ul>
            <li>Testing Website by Robot Framework with Python</li>          
          </ul>
          <div className="flex justify-between w-full">
              <span className="">Full-Stack developer, <p className="font-bold">Telemedica co, ltd. ( OOCA )</p></span>
              <span>July 11, 2017 to Present</span>
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
