import React, { useContext } from "react";
import Login from "../components/Login";
import { UidContext } from "../components/AppContext";
import Me from "../components/Connoisseur/Me";

const Profile = () => {
  const uid = useContext(UidContext);
  return (
    <div className="container">
      {uid ? (
        <Me />
      ) : (
        <div className="container ">
          <Login />
        </div>
      )}
    </div>
  );
};

export default Profile;
