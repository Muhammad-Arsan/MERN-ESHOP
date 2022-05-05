import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import "./Cart.css";
import {
  addItemsToCart,
  removeItemFromCart,
} from "../../redux/actions/cartActions";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQunatity = (id, stock, quantity) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };
  const decreaseQunatity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };
  const deleteCartItems = (id) => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>NO items in the Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>product</p>
              <p>qunatity</p>
              <p>subsotal</p>
            </div>
            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItem={deleteCartItems} />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        increaseQunatity(
                          item.product,
                          item.stock,
                          item.quantity
                        )
                      }
                    >
                      +
                    </button>
                    <input type="" readOnly value={item.quantity} />
                    <button
                      onClick={() =>
                        decreaseQunatity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                  </div>
                  <p className="cartSubtotal">{`$ ${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}
            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`$ ${cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button>Check Out</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
