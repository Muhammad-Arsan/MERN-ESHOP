import React, { Fragment, useState, useEffect } from "react";
import "./ResetPassword.css";
import Loader from "../layout/Loader/loader";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, resetPassword } from "../../redux/actions/userActions";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_PASSWORD_RESET } from "../../redux/constants/userConstant";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";

import MetaData from "../layout/MetaData";

const ResetPassword = () => {
  const { error, success, loading } = useSelector(
    (state) => state?.forgotPassword
  );
  console.log("loading", loading);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { token } = useParams();
  const resetPasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(token, myForm));
    navigate("/account");
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Password Updated Successfully");
      navigate("/login");
    }
  }, [dispatch, error, alert, navigate, success]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Reset Password" />
          <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
              <h2 className="resetPasswordHeading">Update Profile</h2>
              <form
                className="resetPasswordForm"
                encType="multipart/form-data"
                onSubmit={resetPasswordSubmit}
              >
                <div>
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Update Password"
                  className="resetPasswordBtn"
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

export default ResetPassword;
