import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Doqnload our App</h4>
        <p>Download App for android and Ios Phone</p>
        <img src={playStore} alt="playStore" />
        <img src={appStore} alt="AppStore" />
      </div>
      <div className="midFooter">
        <h1>APNA LOGO</h1>
        <p>Some Thing is Going</p>
        <p>Copyrights 2022 &copy; M Arsan</p>
      </div>
      <div className="rightFooter"></div>
    </footer>
  );
};

export default Footer;
