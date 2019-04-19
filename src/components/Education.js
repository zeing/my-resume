import React, { Component } from 'react';
class Education extends Component {
  render() {
    return (
      <div className="flex flex-col px-8">
       <h1 className="title" >Education</h1>
        <div className="flex flex-col">
          <div className="flex justify-between w-full">
              <span className="">Department of Computer and Information Science, <p className="font-bold">King Mongkut’s University of Technology North Bangkok</p></span>
              <span>2013 - 2017</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
