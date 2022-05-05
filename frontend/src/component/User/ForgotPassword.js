import React, { Fragment, useState, useEffect } from "react";
import "./ForgotPassword.css";
import Loader from "../layout/Loader/loader";
import MetaDa from "../layout/MetaData";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, forgotPassword } from "../../redux/actions/userActions";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { UPDATE_PROFILE_RESET } from "../../redux/constants/userConstant";

const ForgotPassword = () => {
  const { error, message, loading } = useSelector(
    (state) => state?.forgotPassword
  );
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      alert.success(message);
    }
  }, [dispatch, error, alert, message]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaDa title="Forgot Password" />
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Forgot Password</h2>
              <form
                className="forgotPasswordForm"
                onSubmit={forgotPasswordSubmit}
              >
                <div className="forgotPasswordEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Enter your Email..."
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Send"
                  className="forgotPasswordBtn"
                  // disabled={loading ? true : false}
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ForgotPassword;
