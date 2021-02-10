import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listParties } from "../../actions/party.action";
import { isEmpty } from "../../Utils";
import PartyCard from "./PartyCard";

const Timeline = () => {
  const dispatch = useDispatch();
  const { parties, users } = useSelector((state) => state.partiesReducer);
  const [loadParties, setLoadParties] = useState(true);

  useEffect(() => {
    if (loadParties) {
      dispatch(listParties());
      setLoadParties(false);
    }
  }, [loadParties, dispatch]);

  return parties ? (
    <div className="row row-cols-3 row-md-3">
      {!isEmpty(parties[0])
        ? parties.map((party) => {
            console.log("Card for ", party._id, " with users ", users);
            return <PartyCard party={party} key={party._id} />;
          })
        : "No parties"}
    </div>
  ) : (
    <div className="container">Nothing here</div>
  );
};

export default Timeline;
