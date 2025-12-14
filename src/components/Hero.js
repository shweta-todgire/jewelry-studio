import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaGem } from "react-icons/fa";
import "./Hero.css";

const logoText = "Luxora";

const categories = [
  { name: "rings", displayName: "Eternal Rings", description: "Timeless rings to cherish forever.", image: "/product2.jpg" },
  { name: "necklaces", displayName: "Aurora Necklaces", description: "Elegant necklaces that shine.", image: "/product3.jpg" },
  { name: "bracelets", displayName: "Ivory Bracelets", description: "Bracelets to complete your style.", image: "/product1.jpg" },
  { name: "earrings", displayName: "Rhea Earrings", description: "From studs to chandeliers for your look.", image: "/product4.jpg" },
];

export default function Hero() {
  const logoControls = useAnimation();
  const contentControls = useAnimation();
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function runSequence() {
      await logoControls.start("visible");
      await logoControls.start("toHeader");
      setShowContent(true);
      contentControls.start({ opacity: 1, transition: { duration: 1 } });
    }
    runSequence();
  }, [logoControls, contentControls]);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeUpStagger = { hidden: { opacity: 0, y: 30 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" } }) };

  return (
    <div className="hero-container">
      {/* Logo Header */}
      <motion.div className="logo-group" variants={logoGroupVariants} initial="hidden" animate={logoControls}>
        <div className="logo-text">
          {logoText.split("").map((letter, index) => (
            <motion.span key={index} className="logo-letter" variants={letterVariants} custom={index}>
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.img
          src="/Image.png"
          alt="Luxora logo"
          className="logo-image"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      {/* Content Sections */}
      <motion.div className="content-wrapper" initial={{ opacity: 0 }} animate={contentControls}>
        {/* Beige Section */}
        <div className="beige-section">
          <div className="beige-content">
            <motion.div className="beige-image-left" variants={fadeUp} initial="hidden" animate="visible" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img src="/jewelry1.png" alt="Jewelry" className="jewelry-image" />
            </motion.div>

            <motion.div className="center-text" variants={fadeUpStagger} initial="hidden" animate="visible">
              <motion.h2 variants={fadeUp}>Elevate Your Style!</motion.h2>
              <motion.p variants={fadeUp}>Discover handcrafted jewelry that blends elegance and modern design. Perfect for every occasion.</motion.p>
              <motion.p variants={fadeUp}>Premium materials, timeless designs, and pieces that tell your story.</motion.p>
            </motion.div>

            <motion.div className="beige-image-right" variants={fadeUp} initial="hidden" animate="visible" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img src="/jewelry2.png" alt="Model wearing jewelry" className="jewelry-image-full" />
            </motion.div>
          </div>
        </div>

        {/* Products Section */}
        <div className="products-section">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="category-card"
              variants={fadeUpStagger}
              initial="hidden"
              animate="visible"
              custom={i}
              onClick={() => navigate(`/category/${cat.name}`)}  // Redirects to category page
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img src={cat.image} alt={cat.displayName} className="category-image" variants={fadeUp} transition={{ duration: 0.3 }} />
              <motion.h3 variants={fadeUp}>{cat.displayName}</motion.h3>
              <motion.p variants={fadeUp}>{cat.description}</motion.p>
            </motion.div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="story-section">
          <h2>The Art of Excellence</h2>
          <div className="story-cards">
            <div className="story-card">
              <FaStar className="story-icon"/>
              <h3>Handcrafted</h3>
              <p>Each piece is meticulously crafted by master artisans with decades of experience.</p>
            </div>
            <div className="story-card">
              <FaGem className="story-icon"/>
              <h3>Ethical Gems</h3>
              <p>Responsibly sourced diamonds and gemstones certified for quality and origin.</p>
            </div>
          </div>
        </div>

        {/* Contact / Footer Section */}
        <div className="contact-section">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>LUXORA</h3>
              <p>Crafting timeless elegance since 1892. Each piece tells a story of artistry and passion.</p>
            </div>
            <div className="footer-column">
              <h3>EXPLORE</h3>
              <p>Collections</p>
              <p>Craftsmanship</p>
              <p>Contact</p>
            </div>
            <div className="footer-column">
              <h3>CONTACT</h3>
              <p>contact@luxora.com</p>
              <p>0765234553</p>
              <p>India</p>
            </div>
          </div>
          <p className="footer-bottom">© 2025 Luxora Fine Jewelry. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ================= VARIANTS ================= */
const logoGroupVariants = {
  hidden: { top: "50%", left: "50%", x: "-50%", y: "-50%", scale: 1 },
  visible: { transition: { staggerChildren: 0.15 } },
  toHeader: { top: "10px", left: "50%", x: "-50%", y: "0%", scale: 0.6, transition: { duration: 1, ease: "easeInOut" } },
};

const letterVariants = { hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.4, ease: "easeOut" } }) };
