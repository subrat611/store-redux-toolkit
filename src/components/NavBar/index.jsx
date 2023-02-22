import { Link, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function NavBar() {
  const itemCounter = useSelector((state) => state.cart);
  return (
    <div className="wrapper">
      <nav className="navbar-wrapper">
        <span className="nav-logo">
          Redux <Logo />
        </span>
        <ul className="nav-lists">
          <Link to="/">
            <li className="nav-list">Home</li>
          </Link>
          <Link to="/shop">
            <li className="nav-list">Shop</li>
          </Link>
          <li className="nav-list nav-cart">
            {itemCounter.length >= 0 ? (
              <span className="cart-item-counter">{itemCounter.length}</span>
            ) : null}
            <ShoppingCart />
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
