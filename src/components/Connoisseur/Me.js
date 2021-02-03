import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { isEmpty } from "../../Utils";

const Me = () => {
  const userData = useSelector((state) => state.userReducer);
  const postsData = useSelector((state) => state.postsReducer);
  const partiesData = useSelector((state) => state.partiesReducer);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-1"></div>
        <div className="col">
          <div className="row">
            <div className="col-2 bg-light border border-right-0 rounded-left pl-0">
              <img
                src={
                  userData.picture
                    ? userData.picture
                    : `https://robohash.org/${userData._id}.png?size=120x120&set=set5`
                }
                alt={userData.name}
                className="rounded-left align-left"
              />
            </div>
            <div className="col bg-light rounded-right border border-left-0 align-item-center pt-1">
              <h2>{userData.name}</h2>
              <h5>Member since {userData.createdAt || "a lot of time"}</h5>
              <h6>
                Wrote&nbsp;
                {!isEmpty(postsData[0]) &&
                  postsData.filter((post) => {
                    return post.authorId === userData._id;
                  }).length}
                &nbsp;post(s)
              </h6>
            </div>
          </div>
          <div className="row mt-2 justify-content-around">
            <div className="col-4 border">
              <h3 className="text-center">Parties hosted</h3>
              <ul className="list-unstyled">
                {!isEmpty(partiesData.parties) &&
                  partiesData.parties.map((party) => {
                    return (
                      party.host === userData._id && (
                        <li>{moment(party.date).format("LL")} - {party.guests.length}/{party.seats}</li>
                      )
                    );
                  })}
              </ul>
            </div>
            <div className="col-4 border">
              <h3 className="text-center">Parties going to</h3>
              <ul className="list-unstyled">
                {!isEmpty(partiesData.parties) &&
                  partiesData.parties.map((party) => {
                    return (
                      party.guests.indexOf(userData._id) >= 0 &&
                      party.host !== userData._id && (
                        <li>{moment(party.date).format("LL")} - {party.guests.length}/{party.seats}</li>
                      )
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Me;
