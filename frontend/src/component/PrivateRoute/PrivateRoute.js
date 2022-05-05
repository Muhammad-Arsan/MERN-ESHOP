import React, { Children, Fragment } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { loading, isAuthenticated, user } = useSelector(
    (state) => state?.user
  );
  // const what = useSelector((state) => state.user);
  // console.log("what", what);
  // console.log("isAuth", isAthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
  //     <Fragment>

  {
    /* {!loading && (
        <Route
          {...rest}
          render={(props) => {
            if (!isAthenticated) {
              return <Navigate to="/login" />;
            }
            return <Component {...props} />;
          }}
        />
      )} */
  }
  {
    /* </Fragment> */
  }
};

export default PrivateRoute;
