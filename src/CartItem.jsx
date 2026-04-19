import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  deleteItem
} from "./CartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-card">
      <h3>{item.name}</h3>
      <p>Unit Price: ${item.price}</p>
      <p>Total: ${item.price * item.quantity}</p>

      <div className="buttons">
        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
      </div>

      <button onClick={() => dispatch(deleteItem(item.id))}>
        Delete
      </button>
    </div>
  );
}