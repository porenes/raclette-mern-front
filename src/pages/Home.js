import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Timeline from "../components/Home/Timeline";
import Login from "../components/Login";
import CreateParty from "../components/Party/CreateParty";
import PartiesTimeline from "../components/Party/PartiesTimeline";
import CreatePost from "../components/Post/CreatePost";
import Container from "react-bootstrap/Container";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <div>
      <h1>We love Cheese</h1>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-5">
            {uid && <CreatePost />}
            <Timeline />
          </div>
          <div className="col-4">
            {uid ? "" : <Login signin={true} />}
            {uid && (
              <>
                <CreateParty />
                <Container className="bg-light rounded p-2">
                  <PartiesTimeline />
                </Container>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
