import React from "react";
import { useParams } from "react-router-dom";
import Profile from "../components/Connoisseur/Profile";

const Connoisseur = () => {
  const { userId } = useParams();
  return <Profile userId={userId} />;
};

export default Connoisseur;
