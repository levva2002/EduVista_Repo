
import React, { useState } from 'react';
import './UpdateProfile.css';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="update-profile-container">
      <h1 className="update-profile-title">Update Profile</h1>
      <form className="update-profile-form" onSubmit={handleSubmit}>
        <label className="update-profile-label">
          Name:
          <input
            className="update-profile-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="update-profile-label">
          Username:
          <input
            className="update-profile-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="update-profile-label">
          Address:
          <textarea
            className="update-profile-textarea"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label className="update-profile-label">
          Phone Number:
          <input
            className="update-profile-input"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label className="update-profile-label">
          Profile Picture:
          <input
            className="update-profile-input"
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </label>
        <button class="update-button">
          <span class="unskew">Update</span>
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;