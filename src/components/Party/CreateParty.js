import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createParty, listParties } from "../../actions/party.action";

const CreateParty = () => {
  const [date, setDate] = useState(moment().format(moment.HTML5_FMT.DATETIME_LOCAL));
  const [seats, setSeats] = useState(6);
  const [isPrivate, setIsPrivate] = useState(true);
  const [alertCP, setAlertCP] = useState(null);

  const dispatch = useDispatch();

  const handleCreateParty = async (e) => {
    setAlertCP(null);
    dispatch(createParty({ date, seats, isPrivate })).then(() => {
      dispatch(listParties());
      setAlertCP("Party created !");
      cleanForm();
    });
  };

  const cleanForm = () => {
    setDate(Date.now());
  };

  return (
    <div className="container bg-light rounded p-2">
      {alertCP && (
        <div
          className="alert alert-primary fade show"
          role="alert"
          id="cp-alert"
        >
          {alertCP}
        </div>
      )}
      <h4>Invite your friends for some 🧀 !</h4>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="datetime-local"
          className="form-control"
          name="date"
          id="date"
          aria-describedby="partyDate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={moment().format(moment.HTML5_FMT.DATETIME_LOCAL)}
        ></input>
        <small id="partyDate" className="form-text text-muted">
          Should be in the future
        </small>
      </div>
      <div className="form-group form-inline">
        <input
          type="checkbox"
          className="form-check-input"
          id="isPrivate"
          checked={isPrivate}
          onChange={() => setIsPrivate(!isPrivate)}
        />
        <label class="form-check-label" htmlFor="isPrivate">
          Private party
        </label>
      </div>
      <div className="row align-items-end">
        <div className="col">
          <div className="form-group">
            <label htmlFor="seats">Seats</label>
            <input
              type="number"
              className="form-control"
              name="seats"
              id="seats"
              aria-describedby="seatsHelp"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group text-center">
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
    </div>
  );
};

export default CreateParty;
