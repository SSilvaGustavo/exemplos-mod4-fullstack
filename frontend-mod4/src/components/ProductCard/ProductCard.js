import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <article>
        <h2>Product: {product.name}</h2>
        <br />
        <b>Price: R${product.price}</b>
      </article>
    </div>
  );
};

export default ProductCard;
