import React from 'react';
import '../styles/User.css';

const User = () => (
    <div className="user">
        <h1>User Profile</h1>
        <div className="profile">
            <div className="profile-pic">
                <img src="https://via.placeholder.com/150" alt="User Profile" />
            </div>
            <div className="profile-details">
                <h2>Username</h2>
                <p>Some details about the user.</p>
            </div>
        </div>
    </div>
);

export default User;
