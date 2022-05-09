import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import "./ConfirmOrder.css";
import CheckoutSteps from "./CheckoutSteps";
const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      {/* <CheckoutSteps activeStep={1} /> */}
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                {" "}
                <p>Name</p>
                <span>{user.name}</span>
              </div>
              <div>
                {" "}
                <p>Phone</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                {" "}
                <p>Address</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={``}></Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
