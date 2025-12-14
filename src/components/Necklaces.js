import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Necklaces = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Elegant Bow", price: "₹620", image: "/n1.jpg" },
    { name: "Grace Chain", price: "₹850", image: "/n2.jpg" },
    { name: "Timeless Heart Combo", price: "₹1700", image: "/n3.jpg" },
    { name: "Minimal Stack Chains", price: "₹1990", image: "/n4.jpg" },
    { name: "Classic Gold", price: "₹1150", image: "/n5.jpg" },
    { name: "Golden Glow", price: "₹900", image: "/n6.jpg" },
    { name: "Royal Touch", price: "₹1020", image: "/n7.jpg" },
    { name: "Sunshine Chains", price: "₹1250", image: "/n8.jpg" },
    { name: "Silver Grace", price: "₹900", image: "/n9.jpg" },
    { name: "Simple Charm", price: "₹1500", image: "/n10.jpg" },
    { name: "Pure Elegance", price: "₹1220", image: "/n11.jpg" },
    { name: "Moonlight Necklace", price: "₹950", image: "/n12.jpg" },
    { name: "Everyday Wear", price: "₹800", image: "/n13.jpg" },
  ];

  return (
    <div className="category-page-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h1 className="category-title">Aurora</h1>
      <h3 className="category-subtitle">Necklaces</h3>

      <p className="category-description">
        Our Aurora Necklace collection adds elegance and sparkle to every outfit. Each piece is designed to shine and impress. Perfect for making every moment unforgettable.
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

export default Necklaces;
