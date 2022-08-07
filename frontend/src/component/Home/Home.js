import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/loader";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../redux/actions/productActions";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard.js";

const Home = () => {
  const alert = useAlert();
  const allProduct = useSelector((state) => state.allProduct);

  const { products, loading, error, productCount } = allProduct;

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Home Page" />
          <div className="banner">
            <p>Welcome TOO Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product, index) => (
                <ProductCard key={index} products={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
