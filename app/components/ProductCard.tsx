import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-slate-500 text-white text-xl hover:bg-sky-400">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
