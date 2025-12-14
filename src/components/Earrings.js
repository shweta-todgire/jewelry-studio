import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Earrings = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Luna Stud Earrings", price: "₹520", image: "/e1.jpg" },
    { name: "Classic Charm Earrings", price: "₹850", image: "/e2.jpg" },
    { name: "Silver Whisper", price: "₹500", image: "/e3.jpg" },
    { name: "Delicate Drop", price: "₹1000", image: "/e4.jpg" },
    { name: "Soft Shine", price: "₹450", image: "/e5.jpg" },
    { name: "Timeless Gold", price: "₹700", image: "/e6.jpg" },
    { name: "Golden Glow", price: "₹420", image: "/e7.jpg" },
    { name: "Royal Touch", price: "₹750", image: "/e8.jpg" },
    { name: "Pure Grace", price: "₹300", image: "/e9.jpg" },
    { name: "Moon Glow", price: "₹320", image: "/e10.jpg" },
    { name: "Elegant Bow", price: "₹450", image: "/e11.jpg" },
    { name: "Elegant Curve", price: "₹600", image: "/e12.jpg" },
    { name: "Grace Drop Earrings", price: "₹520", image: "/e13.jpg" },
    { name: "Star Light", price: "₹550", image: "/e14.jpg" },
    { name: "Golden Bloom", price: "₹800", image: "/e15.jpg" },
  ];

  return (
    <div className="category-page-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h1 className="category-title">Rhea</h1>
      <h3 className="category-subtitle">Earrings</h3>

      <p className="category-description">
        From subtle studs to dramatic chandeliers, our Rhea Earring collection brings light and movement to every look. Each pair is designed to add elegance and a touch of sparkle to any outfit.
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

export default Earrings;
