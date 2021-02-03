import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../Utils";

const Woo = (props) => {
  const [isWooed, setIsWooed] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  //handlewoo function
  const handleWoo = () => {
    //dispatch
    setIsWooed(true);
  };
  //handleunwoo function
  const handleUnWoo = () => {
    //dispatch
    setIsWooed(false);
  };

  useEffect(() => {
    userData.wooed && userData.wooed.includes(props.connoisseurId)
      ? setIsWooed(true)
      : setIsWooed(false);
  }, [userData, props.connoisseurId]);

  return isWooed ? (
    <span className="float-right" onClick={handleUnWoo}>"unwoo"</span>
  ) : (
    <span className="float-right" onClick={handleWoo}>"woo"</span>
  );
};

Woo.propTypes = {
  connoisseurId: PropTypes.string,
};

export default Woo;
