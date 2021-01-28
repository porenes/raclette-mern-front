import React, { useContext } from "react";
import Login from "../components/Login";
import { UidContext } from "../components/AppContext";

const Profile = () => {
  const uid = useContext(UidContext);
  return (
    <div className="profile-page container">
      {uid ? (
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Name</h1>
            <p className="lead">
              You are awesome
            </p>
          </div>
        </div>
      ) : (
        <div className="login-container">
          <Login />
        </div>
      )}
    </div>
  );
};

export default Profile;
