import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Timeline from "../components/Home/Timeline";
import Login from "../components/Login";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <div>
      <h1>We love Cheese</h1>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-8">
            <Timeline />
          </div>
          <div className="col">{uid ? "" : <Login signin={true} />}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
