import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { isEmpty } from "../../Utils";
import { UidContext } from "../AppContext";

const PrivateRoute = ({ children, ...rest }) => {
  const uid = useContext(UidContext);
  console.log("Entering private route with uid " + isEmpty(uid));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isEmpty(uid) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/me",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
