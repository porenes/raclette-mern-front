import React from "react";
import Timeline from "../components/Home/Timeline";

const Home = () => {
  return (
    <div>
      <h1>We love Cheese</h1>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-6">
            <Timeline />
          </div>
          <div className="col-3"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
