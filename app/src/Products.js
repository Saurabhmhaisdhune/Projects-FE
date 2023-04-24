import { useState, useEffect } from "react";
import React from "react";
import Header from "./Header.js";

function Products() {
  const [product, setProduct] = useState([]);

  const getData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <Header />
        {product.map((val) => {
          return (
            <div key={val.product[0].id}>
              <h1>{val.product[0].item}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
