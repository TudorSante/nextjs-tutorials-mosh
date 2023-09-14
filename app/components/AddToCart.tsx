"use client";
import React from "react";

/* This comp will be rendered on the client side - CSR */
const AddToCart = () => {
  return <button onClick={() => console.log("Clicked")}>ClickMe</button>;
};

export default AddToCart;
