import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listParties } from "../../actions/party.action";
import { isEmpty } from "../../Utils";
import PartyCard from "./PartyCard";

const PartiesTimeline = () => {
  const dispatch = useDispatch();
  const { parties } = useSelector((state) => state.partiesReducer);
  const [loadParties, setLoadParties] = useState(true);

  useEffect(() => {
    if (loadParties) {
      dispatch(listParties());
      setLoadParties(false);
    }
  }, [loadParties, dispatch]);

  return parties ? (
    <>
      {!isEmpty(parties[0])
        ? parties.map((party) => {
            return <PartyCard party={party} key={party._id} />;
          })
        : "No parties"}
    </>
  ) : (
    <div className="container">Rien à voir</div>
  );
};

export default PartiesTimeline;
