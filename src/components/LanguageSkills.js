import React, { Component } from 'react';
class TechnicalSkills extends Component {
  render() {
    return (
      <div className="flex flex-col px-8">
       <h1 className="title" >Language Skills</h1>
        <div className="flex">
            <p className="w-1/2">Thai</p>
            <p>Good</p>
        </div>
        <div className="flex">
            <p className="w-1/2">English</p>
            <p>Good</p>
        </div>
      </div>
    );
  }
}

export default TechnicalSkills;
