import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/navbar.css";

const navItems = [
  "Home", 
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

// Fun staggered entrance for the mobile menu links
const menuVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when the mobile menu is open, and let Escape close it
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`navbar ${scrolled ? "navbar-scroll" : ""}`}
    >
      <div className="container nav-container">
        <a href="https://www.instagram.com/yash_pratap_kushwaha?igsh=MW5pM3F1cGtsZjdybw==" className="logo">
          Yash<span>....</span>
        </a>

        <ul className="desktop-menu">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <button className="hire-btn">
          Hire Me
        </button>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                variants={linkVariants}
                whileTap={{ scale: 0.92 }}
              >
                {item}
              </motion.a>
            ))}

            <motion.button
              className="hire-btn mobile-btn"
              variants={linkVariants}
              whileTap={{ scale: 0.92 }}
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
