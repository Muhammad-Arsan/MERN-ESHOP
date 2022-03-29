import React, { useEffect, useState } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";

import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/productActions";
const Home = () => {
  const product = {
    name: "Product1",
    price: "200",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
    _id: "arsan",
  };
  // const allProduct = useSelector((state) => state.allProduct);
  // const { products } = allProduct;
  // console.log("products", products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <>
      <MetaData title="Home Page" />
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product products={product} />
      </div>
    </>
  );
};

export default Home;
