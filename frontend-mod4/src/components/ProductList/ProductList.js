import { useState, useEffect } from "react";
import { Api } from "../../api/Api";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      loadData();
  }, [])

  const loadData = async () => {
    const response = await Api.fetchGet();

    const res = await response.json();

    setProducts(res.results);
};

  return (
    <div>
        {products.map((product, index) => (
            <div key={"product_" + index}>{product.name}</div>
        ))}
    </div>
    )
};
