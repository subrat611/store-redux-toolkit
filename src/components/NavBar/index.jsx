import { Link, Outlet } from "react-router-dom";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function NavBar() {
  return (
    <div className="wrapper">
      <nav className="navbar-wrapper">
        <span className="nav-logo">
          <Logo />
        </span>
        <ul className="nav-lists">
          <li className="nav-list">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav-list nav-cart">
            <ShoppingCart />
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
