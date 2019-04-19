import React, { Component } from 'react';
class TechnicalSkills extends Component {
  render() {
    return (
      <div className="flex flex-col px-8">
       <h1 className="title" >Technical Skills</h1>
        <div className="flex">
            <p className="w-1/2">JavaScript</p>
            <p>Good</p>
        </div>
        <div className="flex">
            <p className="w-1/2">Css</p>
            <p>Good</p>
        </div>
        <div className="flex">
            <p className="w-1/2">Html</p>
            <p>Good</p>
        </div>
       
      </div>
    );
  }
}

export default TechnicalSkills;
