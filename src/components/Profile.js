import React, { Component } from 'react';
class Profile extends Component {
  render() {
    return (
      <div className="flex flex-col px-8">
        <img src="./profile.jpg" alt="profile" className="profile rounded-full bg-cover bg-center flex items-center justify-center mb-4"/>
        <p className="font-bold">Witthawin Sirisiwaphak</p>
        <p className="font-bold">Fullstack Developer</p>
        <div className="flex flex-wrap w-full mb-8">
          <div className="w-full mb-4">
            <span className="pr-4">Email</span>
            <span className="">zeing@outlook.com</span>
          </div>
          <div className="w-full">
            <span className="pr-4">Address</span>
            <span className="">Trat, Thailand</span>
          </div>      
        </div>
        <h1 className="title" >Profile</h1>
        <span>
        I like to solve problem and learn new things.

        And I like to share knowledge when I learn new things

        I am happy when I develop and maintain some products that can solve real problem.
        </span>


      </div>
    );
  }
}

export default Profile;
