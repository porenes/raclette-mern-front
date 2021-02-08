import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listParties } from "../../actions/party.action";
import { isEmpty } from "../../Utils";
import Card from "./Card";

const Timeline = () => {
  const dispatch = useDispatch();
  const partiesState = useSelector((state) => state.partiesReducer);
  const [loadParties, setLoadParties] = useState(true);

  useEffect(() => {
    if (loadParties) {
      dispatch(listParties());
      setLoadParties(false);
    }
  }, [loadParties, dispatch]);

  return partiesState ? (
    <div className="row row-cols-3 row-md-3">
      {partiesState.parties && !isEmpty(partiesState.parties[0])
        ? partiesState.parties.map((party) => {
            return (
              <Card party={party} users={partiesState.users} key={party._id} />
            );
          })
        : "No parties"}
    </div>
  ) : (
    <div className="container">Nothing here</div>
  );
};

export default Timeline;
