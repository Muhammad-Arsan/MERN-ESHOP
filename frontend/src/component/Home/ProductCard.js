import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const ProductCard = ({ products }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: products.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  return (
    <Link className="productCard" to={`/product/${products._id}`}>
      <img src={products?.images[0]?.url} alt={products.name} />
      <p>{products.name}</p>
      <div>
        <ReactStars {...options} />
        <span>({products.numOfReviews} Reviews) </span>
      </div>
      <span>${products.price}</span>
    </Link>
  );
};

export default ProductCard;
