import React, { useEffect } from "react";
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
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    // store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
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
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
