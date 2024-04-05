// ProfilePage.js
import React from 'react';
import './ProfilePage.css';
import { IoIosCamera } from "react-icons/io";
// import avatar from './avatar.png'; // Assuming you have an image file for the avatar

function ProfilePage() {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="left-info">
          <h2>Marry Doe</h2>
          <p>Marry.doe@example.com</p>
        </div>
        <div className="right-info">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTvu5pNCkWsqWxlTitwq6Nj8UQQQqVoUF7isDX7h0wA&s' alt="Avatar" className="avatar" />
          <div className="camera-icon">
          <IoIosCamera />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
