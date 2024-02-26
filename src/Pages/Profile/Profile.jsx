import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import './Profile.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile data when the component mounts
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user) {
      // User is signed in, fetch the profile data
      setUserProfile({
        displayName: user.displayName,
        email: user.email,
        // Add more profile properties as needed (e.g., address, phone number, etc.)
      });
      setEditedProfile({
        displayName: user.displayName,
        email: user.email,
        // Initialize other profile properties for editing
      });
    } else {
      // No user is signed in
      setUserProfile(null);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Perform save operation with edited profile data
    // For example, update the user's profile in the database
    // Then, set isEditing to false to exit editing mode
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({
      ...editedProfile,
      [name]: value,
    });
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {userProfile ? (
        <div className="profile-details">
          <div className="profile-section">
            <h3>Personal Information</h3>
            <div className="profile-field">
              <label>Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="displayName"
                  value={editedProfile.displayName}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{userProfile.displayName}</span>
              )}
              {isEditing && (
                <button onClick={handleSave}>
                  <FontAwesomeIcon icon={faSave} />
                </button>
              )}
            </div>
            <div className="profile-field">
              <label>Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editedProfile.email}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{userProfile.email}</span>
              )}
              {isEditing && (
                <button onClick={handleSave}>
                  <FontAwesomeIcon icon={faSave} />
                </button>
              )}
            </div>
            {!isEditing && (
              <button onClick={handleEdit}>
                <FontAwesomeIcon icon={faEdit} />
                Edit
              </button>
            )}
          </div>
          {/* Add sections for order history, payment methods, etc. */}
          <div className="profile-section">
            <h3>Order History</h3>
            {/* Placeholder for order history */}
          </div>
          <div className="profile-section">
            <h3>Payment Methods</h3>
            {/* Placeholder for payment methods */}
          </div>
        </div>
      ) : (
        <p>No user is signed in.</p>
      )}
    </div>
  );
};

export default UserProfile;
