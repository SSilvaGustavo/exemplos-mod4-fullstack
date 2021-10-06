import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div classname="card">
      <div classname="card__title">
        <h2>Product: {product.name}</h2>
      </div>
      <br />
      <div classname="card__price">
        <b>Price: R${product.price}</b>
      </div>
      <br />
      <div classname="card__images">
        {product.images.map((image) => (
          <div classname="card__image">
          <img src={image.url} alt={product.name + "'s image"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
