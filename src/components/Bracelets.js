import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Bracelets = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Grace Diamond Bracelet", price: "₹2800", image: "/b1.jpg" },
    { name: "Gloss Silver Bracelet", price: "₹1000", image: "/b2.jpg" },
    { name: "Elegant Gold Combo", price: "₹2200", image: "/b3.jpg" },
    { name: "Silver Knot", price: "₹900", image: "/b4.jpg" },
    { name: "Classic Bracelet Set", price: "₹1800", image: "/b5.jpg" },
    { name: "Chunky Gold Kada", price: "₹1800", image: "/b6.jpg" },
    { name: "Simple Gold Bracelets Combo", price: "₹2000", image: "/b7.jpg" },
    { name: "Silver & Gold Kada", price: "₹1500", image: "/b8.jpg" },
    { name: "Chunky HandCuff Kada", price: "₹2220", image: "/b9.jpg" },
    { name: "Chunky HandCuff Kada", price: "₹2220", image: "/b10.jpg" },
    { name: "Regal Radiance Pair", price: "₹3000", image: "/b11.jpg" },
    { name: "Seraphine Gold", price: "₹1200", image: "/b12.jpg" },
  ];

  return (
    <div className="category-page-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h1 className="category-title">Ivory</h1>
      <h3 className="category-subtitle">Bracelets</h3>

      <p className="category-description">
        From delicate chains to bold statement pieces, our Ivory Bracelets elevate every outfit with elegance. Each bracelet is carefully crafted to add a touch of sophistication and charm to every look.
      </p>

      <div className="products-grid">
        {products.map((p) => (
          <div key={p.name} className="product-card">
            <img src={p.image} alt={p.name} className="product-image" />
            <h4 className="product-name">{p.name}</h4>
            <p className="product-price">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bracelets;
