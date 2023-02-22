import { useEffect, useState } from "react";

import { add } from "../../store/cartSlice";

import { useDispatch } from "react-redux";

import "./product.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );

    setProducts(res);
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="product-wrapper">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt="product-image" />
          </div>
          <p className="product-title">{product.title}</p>
          <div className="product-body">
            <span className="product-price">₹ {product.price}</span>
            <button
              className="product-add-btn"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
