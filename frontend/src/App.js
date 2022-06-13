import React, { useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignup from "./component/User/LoginSignup";
import WebFont from "webfontloader";
import { loadUser } from "./redux/actions/userActions";
import store from "./store";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    // store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {isAuthenticated && <UserOptions user={user} />}
          {stripeApiKey && (
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Route
                exact
                path="/process/payment"
                element={
                  <PrivateRoute>
                    <Payment />
                  </PrivateRoute>
                }
              />
            </Elements>
          )}
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            exact
            path="/products"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          />
          <Route path="/products/:keyword" element={<Products />} />
          <Route exact path="/search" element={<Search />} />
          <Route
            exact
            path="/account"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/me/update"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/password/update"
            element={
              <PrivateRoute>
                <UpdatePassword />
              </PrivateRoute>
            }
          />{" "}
          <Route exact path="/password/forgot" element={<ForgotPassword />} />
          <Route
            exact
            path="/password/reset/:token"
            element={<ResetPassword />}
          />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/login" element={<LoginSignup />} />
          <Route
            exact
            path="/login/shipping"
            element={
              <PrivateRoute>
                <Shipping />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/order/confirm"
            element={
              <PrivateRoute>
                <ConfirmOrder />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
