import React from 'react';
import Login from '../components/Login';

const Profile = () => {
    return (
        <div className="profile-page container">
            <div className="login-container">
                <Login />
            </div>
            Here comes your profile
        </div>
    );
};

export default Profile;