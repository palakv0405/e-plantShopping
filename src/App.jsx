import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

export default function App() {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <nav className="navbar">
        <h1>Paradise Nursery</h1>
        <span>Cart: {cartItems.length}</span>
      </nav>

      <AboutUs />

      <ProductList />

      <h2>Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="cart-actions">
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
}