import React from "react";
import "./links.css";
import { motion } from "framer-motion";
const variants = {
  open: { transition: { staggerChildren: 0.1 } },
  close: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const linkVariants = {
  open: { x: 0, opacity: 1 },
  close: { x: -50, opacity: 0 },
};
const Links = () => {
  const items = ["Home", "About", "Projects", "Contact"];
  return (
    <motion.div
      className="hamburger_links"
      variants={variants}
      transition={{ duration: 3, ease: "linear" }}
    >
      {items.map((item) => (
        <motion.a
          className="hamburger_link"
          href={"#" + item}
          key={item}
          variants={linkVariants}
          whileHover={{ scale: 1.2, color: "#d90429" }}
          whileTap={{ scale: 0.97 }}
        >
          {" "}
          {item}{" "}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
