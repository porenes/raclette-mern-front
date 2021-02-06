import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../Utils";
import { unwoo, woo } from "../../actions/user.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Woo = ({ author }) => {
  const UNWOO = (
    <>
      <FontAwesomeIcon icon="heart-broken" /> Unwoo ?
    </>
  );
  const WOOED = (
    <>
      <FontAwesomeIcon icon="heart" /> Woo Woo
    </>
  );
  const COMPEER = (
    <>
      <FontAwesomeIcon icon="heart" /> Compeer <FontAwesomeIcon icon="heart" />
    </>
  );

  const [isWooed, setIsWooed] = useState(false);
  const [isWooer, setIsWooer] = useState(false);
  const [wooedText, setWooedText] = useState(WOOED);
  const [compeerText, setCompeerText] = useState(COMPEER);
  const [notWooedOver, setNotWooedOver] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  //handlewoo function
  const handleWoo = () => {
    dispatch(woo(author._id));
    // setIsWooed(true);
  };
  //handleunwoo function
  const handleUnWoo = () => {
    dispatch(unwoo(author._id));
    // setIsWooed(false);
  };

  useEffect(() => {
    console.log(userData.wooed);
    console.log(author._id);
    userData.wooeds && userData.wooeds.includes(author._id)
      ? setIsWooed(true)
      : setIsWooed(false);
    
    userData.wooers && userData.wooers.includes(author._id)
      ? setIsWooer(true)
      : setIsWooer(false);
    
  }, [userData, author]);

  return isWooed ? (
    isWooer ?

    <button
      type="button"
      className="btn btn-success float-right"
      onClick={handleUnWoo}
      onMouseEnter={() => setCompeerText(UNWOO)}
      onMouseLeave={() => setCompeerText(COMPEER)}
    >
      {compeerText}
    </button>
    :
    <button
      type="button"
      className="btn btn-primary float-right"
      onClick={handleUnWoo}
      onMouseEnter={() => setWooedText(UNWOO)}
      onMouseLeave={() => setWooedText(WOOED)}
    >
      {wooedText}
    </button>
  ) : (
    <button
      type="button"
      className={notWooedOver?"btn btn-primary float-right":"btn btn-secondary float-right"}
      onClick={handleWoo}
      onMouseEnter={() => setNotWooedOver(true)}
      onMouseLeave={() => setNotWooedOver(false)}
    >
      {notWooedOver?
      <>
        <FontAwesomeIcon icon="heart" /> Woo !
      </>
      :
      <>
         Woo ?
      </>}
    </button>
  );
};

Woo.propTypes = {
  author: PropTypes.object,
};

export default Woo;
