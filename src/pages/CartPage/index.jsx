import { useSelector } from "react-redux";
import CartItems from "../../components/CartItems";

import "./cartpage.css";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="cart-page-wrapper">
      <h2 className="cart-page-title">Cart</h2>
      <div className="cart-list-wrapper">
        {cartItems.length > 0 ? (
          <CartItems cartItems={cartItems} />
        ) : (
          <h1 className="cart-list-empty">Cart is empty</h1>
        )}
      </div>
    </div>
  );
}
