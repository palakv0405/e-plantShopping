import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const products = [
  { id: 1, name: "Rose Plant", price: 10 },
  { id: 2, name: "Money Plant", price: 15 },
  { id: 3, name: "Cactus", price: 8 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>

          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;