import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Timeline from "../components/Home/Timeline";
import Login from "../components/Login";
import CreateParty from "../components/Party/CreateParty";
import CreatePost from "../components/Post/CreatePost";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <div>
      <h1>We love Cheese</h1>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-6">
            {uid && <CreatePost /> }
            <Timeline />
          </div>
          <div className="col">{uid ? "" : <Login signin={true} />}
            {uid && <CreateParty /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
