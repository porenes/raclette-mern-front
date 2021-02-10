import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { unwoo, woo } from "../../actions/user.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isEmpty } from "../../Utils";
import Button from "react-bootstrap/Button";

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
    console.log(!isEmpty(userData));
    userData.wooeds && userData.wooeds.includes(author._id)
      ? setIsWooed(true)
      : setIsWooed(false);

    userData.wooers && userData.wooers.includes(author._id)
      ? setIsWooer(true)
      : setIsWooer(false);
  }, [userData, author]);

  if (!isEmpty(userData)) {
    return isWooed ? (
      isWooer ? (
        <Button
          variant="success"
          className="float-right"
          onClick={handleUnWoo}
          onMouseEnter={() => setCompeerText(UNWOO)}
          onMouseLeave={() => setCompeerText(COMPEER)}
        >
          {compeerText}
        </Button>
      ) : (
        <Button
          type="button"
          variant="primary"
          className="float-right"
          onClick={handleUnWoo}
          onMouseEnter={() => setWooedText(UNWOO)}
          onMouseLeave={() => setWooedText(WOOED)}
        >
          {wooedText}
        </Button>
      )
    ) : (
      <Button
        type="button"
        variant={notWooedOver ? "primary" : "secondary"}
        className="float-right"
        onClick={handleWoo}
        onMouseEnter={() => setNotWooedOver(true)}
        onMouseLeave={() => setNotWooedOver(false)}
      >
        {notWooedOver ? (
          <>
            <FontAwesomeIcon icon="heart" /> Woo !
          </>
        ) : (
          <>Woo ?</>
        )}
      </Button>
    );
  } else return <></>;
};

Woo.propTypes = {
  author: PropTypes.object,
};

export default Woo;
