import { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import ProductCard from "../ProductCard/ProductCard";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await Api.fetchGet();

    const results = await response.json();

    setProducts(results);
  };

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard product={product} key={index.id} />
      ))}
    </div>
  );
};
