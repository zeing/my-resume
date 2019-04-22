import React, { Component } from 'react';
class Profile extends Component {
  render() {
    return (
      <div className="flex flex-col px-8">
        <img src="./profile.jpg" alt="profile" className="profile rounded-full bg-cover bg-center flex items-center justify-center mb-4"/>
        <p className="font-bold">Witthawin Sirisiwaphak</p>
        <p className="font-bold">Fullstack Developer</p>
        <div className="flex flex-wrap w-full mb-8">
          <div className="w-full my-2">
            <span className="pr-4">Email</span>
            <span className="">zeing@outlook.com</span>
          </div>
          <div className="w-full my-2">
            <span className="pr-4">Address</span>
            <span className="">Trat, Thailand</span>
          </div>
          <div className="flex justify-between w-1/2">
            <a href="http://www.fb.com/einguht" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook text-4xl text-blue-dark"></i></a>
            <a href="http://line.me/ti/p/~zeing" target="_blank" rel="noopener noreferrer"><i className="fab fa-line text-4xl text-green-dark"></i></a>
            <a href="http://m.me/einguht" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-messenger text-4xl text-blue-dark"></i></a>

          </div>
        </div>
        <h1 className="title" >Profile</h1>
        <span>
        I love coding :S
        </span>


      </div>
    );
  }
}

export default Profile;
