import Product from "../../components/Product";
import "./homepage.css";

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <h1>Welcome to React Store</h1>
      <Product />
    </div>
  );
}
