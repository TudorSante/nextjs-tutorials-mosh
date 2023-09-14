import React from "react";
import AddToCart from "./AddToCart";

/* This comp will be rendered on the server - SSR */
const ProductCard = () => {
  return (
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
