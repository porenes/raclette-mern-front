import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createParty, listParties } from "../../actions/party.action";

const CreateParty = () => {
  const [date, setDate] = useState(Date.now());

  const dispatch = useDispatch();

  const handleCreateParty = async (e) => {
    await dispatch(createParty({ date }));
    dispatch(listParties());
    cleanForm();
  };

  const cleanForm = () => {
    setDate(Date.now());
  };

  return (
    <div className="row mb-2">
      <div className="col-10">
        <div className="form-group">
          <label for="date">Date</label>
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
            Shoudl be in the future
          </small>
        </div>
      </div>
      <div className="col-2 align-self-center">
        <button
          type="button"
          className="btn btn-primary float-middle "
          onClick={handleCreateParty}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CreateParty;
