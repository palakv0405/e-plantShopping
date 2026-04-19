import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", category: "Medicinal", price: 10 },
  { id: 2, name: "Lavender", category: "Aromatic", price: 15 },
  { id: 3, name: "Tulsi", category: "Medicinal", price: 8 },
  { id: 4, name: "Rosemary", category: "Aromatic", price: 12 }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Medicinal Plants</h2>
      <h2>Aromatic Plants</h2>

      <div className="grid">
        {plants.map(plant => (
          <div key={plant.id} className="card">
            <h3>{plant.name}</h3>
            <p>{plant.category}</p>
            <p>${plant.price}</p>

            <button onClick={() => dispatch(addToCart(plant))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}