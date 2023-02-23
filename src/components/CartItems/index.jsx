import { useDispatch } from "react-redux";
import { remove } from "../../store/cartSlice";

export default function CartItems({ cartItems }) {
  const dispatch = useDispatch();

  const removeItem = (itemId) => {
    dispatch(remove(itemId));
  };

  return (
    <div>
      {cartItems.map((item) => (
        <div className="cart-list-item" key={item.id}>
          <div className="cart-item-image">
            <img src={item.image} alt="item-image" />
          </div>
          <p>{item.title}</p>
          <div>
            <p>₹ {item.price}</p>
            <button
              className="cart-item-remove-btn"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
