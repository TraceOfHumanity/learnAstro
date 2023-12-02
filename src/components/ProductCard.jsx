import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [description, setDescription] = useState(false);
  console.log(description);
  const toggle = () => {
    setDescription((prev) => !prev);
  };
  return (
    <div className="p-1 border border-gray-800 mb-2">
      <h3>{product.title}</h3>
      <p>{product.price}$</p>
      <a href={`/product/${product.id}`}>Open details</a> <br />
      <button onClick={toggle} class=" bg-slate-300 p-2">
        toggle description
      </button>
      {description && <p>{product.description}</p>}
    </div>
  );
};

export default ProductCard;
