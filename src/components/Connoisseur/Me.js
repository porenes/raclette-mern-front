import React from "react";
import { useSelector } from "react-redux";

const Me = () => {
  const userData = useSelector((state) => state.userReducer);
  return <div>
      {userData.name}
  </div>;
};

export default Me;
