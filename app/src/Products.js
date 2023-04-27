import { useState, useEffect } from "react";
import React from "react";
import Header from "./Header.js";

function Products() {
  const [count,setCount]=useState(0);
  const [products, setProducts] = useState([]);

  // Fetch products data from dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data.products));
  }, []);
  
  const handleAdd=()=>{
    setCount(count+1);
  }
  return (
   <>
        <Header count={count}/>
       <div className="productsaree">
      {products?.map((value) => {
        return (
          <div className="saree" key={value.name}>
            <img
              src={value.images[1]}
              alt="saree"
              className="sareeimg"
            />
            <p>{value.description}</p>
            <p>Rating :{value.rating}</p>
            <p>₹ {value.price}</p>
            <button onClick={handleAdd}>Add to Cart</button>
          </div>
        );
      })}
      </div>
</>
)
  }

export default Products;

