import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const Product = () => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: 2.5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  return (
    // <Link className="productCard" to={product._id}>
    //   {/* <img src={product?.images[0]?.url} alt={product.name} /> */}
    //   <p>{product.name}</p>
    //   <div>
    //     <ReactStars {...options} />
    //     <span>(256 Reviews) </span>
    //   </div>
    //   <span>${product.price}</span>

    // </Link>
    <>
      {/* {products.map((pro) => (
        <h1>{pro.name}</h1>
      ))} */}
    </>
  );
};

export default Product;
