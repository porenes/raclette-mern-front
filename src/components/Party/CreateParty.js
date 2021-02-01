import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createParty, listParties } from "../../actions/party.action";

const CreateParty = () => {
  const [date, setDate] = useState(Date.now());
  const [seats, setSeats] = useState(4);

  const dispatch = useDispatch();

  const handleCreateParty = async (e) => {
    await dispatch(createParty({ date, seats }));
    dispatch(listParties());
    cleanForm();
  };

  const cleanForm = () => {
    setDate(Date.now());
  };

  return (
    <div className="container bg-light clearfix rounded p-2">
      <div className="form-group">
        <label forHtml="date">Date</label>
        <input
          type="date"
          className="form-control"
          name="date"
          id="date"
          aria-describedby="partyDate"
          placeholder="YYYY-MM-DD"
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <small id="partyDate" className="form-text text-muted">
          Should be in the future
        </small>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label forHtml="seats">Seats</label>
            <input
              type="number"
              className="form-control"
              name="seats"
              id="seats"
              aria-describedby="seatsHelp"
              onChange={(e) => setSeats(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <label>&nbsp;</label>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCreateParty}
          >
            Create 🎉
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateParty;
