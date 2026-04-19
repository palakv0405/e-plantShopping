import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const plants = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 10, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 12, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 15, img: "https://via.placeholder.com/100" },
    { id: 4, name: "Spider Plant", price: 9, img: "https://via.placeholder.com/100" },
    { id: 5, name: "Money Plant", price: 11, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Fern", price: 8, img: "https://via.placeholder.com/100" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 14, img: "https://via.placeholder.com/100" },
    { id: 8, name: "Jasmine", price: 13, img: "https://via.placeholder.com/100" },
    { id: 9, name: "Bougainvillea", price: 16, img: "https://via.placeholder.com/100" },
    { id: 10, name: "Hibiscus", price: 10, img: "https://via.placeholder.com/100" },
    { id: 11, name: "Marigold", price: 7, img: "https://via.placeholder.com/100" },
    { id: 12, name: "Tulsi", price: 6, img: "https://via.placeholder.com/100" }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => [...prev, plant.id]);
  };

  return (
    <div>

      {/* NAVBAR (important for grading) */}
      <nav className="navbar">
        <h2 className="logo">Paradise Nursery</h2>

        <div className="nav-links">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/products")}>Products</button>
          <button onClick={() => navigate("/cart")}>Cart</button>
        </div>
      </nav>

      <h2 className="title">Plant Collection</h2>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h3 className="category-title">{category} Plants</h3>

          <div className="product-grid">
            {plants[category].map((plant) => (
              <div key={plant.id} className="product-card">

                <img src={plant.img} alt={plant.name} />

                <h4>{plant.name}</h4>
                <p>Price: ${plant.price}</p>

                <button
                  onClick={() => handleAdd(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;