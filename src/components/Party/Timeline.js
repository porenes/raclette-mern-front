import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../Utils";
import Card from "./Card";


const Timeline = () => {
  const dispatch = useDispatch();
  const parties = useSelector((state) => state.partiesReducer);

  useEffect(() => {
    return () => {};
  }, [dispatch]);

  return parties ? (
    <div className="row row-cols-3 row-md-3">
      {!isEmpty(parties[0]) &&
        parties.map((party) => {
          return <Card party={party} key={party._id} />;
        })}
    </div>
  ) : (
    <div className="container">Nothing here</div>
  );
};

export default Timeline;
