import React, { Fragment } from "react";
import "./LoginSignup.css";
import Loader from "../layout/Loader/loader";
const LoginSignup = () => {
  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signup_toggle">
              <p onClick={(e) => switchTabs(e, "login")}> LOGIN</p>
              <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineIcon />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignup;
