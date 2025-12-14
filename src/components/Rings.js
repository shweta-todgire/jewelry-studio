import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css"; 

const Rings = () => {
  const navigate = useNavigate();

  const ringsProducts = [
    { name: "Soft Shine", price: "₹999", image: "/r1.jpg" },
    { name: "Simple Band", price: "₹499", image: "/r2.jpg" },
    { name: "Knot Elegant Ring", price: "₹649", image: "/r3.jpg" },
    { name: "Grace Ring", price: "₹799", image: "/r4.jpg" },
    { name: "Pure Gold", price: "₹749", image: "/r5.jpg" },
    { name: "Minimal Ring Set", price: "₹1499", image: "/r6.jpg" },
    { name: "Timeless Gold Set", price: "₹1849", image: "/r7.jpg" },
    { name: "Elegant Silver", price: "₹859", image: "/r8.jpg" },
    { name: "Classic Gold", price: "₹599", image: "/r9.jpg" },
    { name: "Golden Glow", price: "₹699", image: "/r10.jpg" },
    { name: "Royal Touch Ring", price: "₹949", image: "/r11.jpg" },
    { name: "Delicate Ring", price: "₹899", image: "/r12.jpg" },
    { name: "Minimal combo", price: "₹799", image: "/r13.jpg" },
  ];

  return (
    <div className="category-page-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h1 className="category-title">Eternal</h1>
      <h3 className="category-subtitle">Rings</h3>

      <p className="category-description">
        Eternal Rings are more than just jewelry—they are a timeless symbol of love, commitment, and sophistication. Crafted with precision and attention to detail, each ring embodies elegance and grace, designed to be cherished for a lifetime.
      </p>

      <div className="products-grid">
        {ringsProducts.map((p) => (
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

export default Rings;
