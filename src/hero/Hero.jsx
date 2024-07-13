import React from "react";
import "./hero.css";
import { motion } from "framer-motion";
import heroImg from "../../assets/GradPic.jpg";
const Hero = ({ animationControl }) => {
  return (
    <motion.div className="hero_section" animate={animationControl}>
      <div className="hero_content">
        <motion.div className="clip" whileHover={{ scale: 1.05 }}>
          <img className="photo" src={heroImg} alt="hero_photo.jpg" />
        </motion.div>
        <div className="hero_text">
          <p className="hello">Hi, I'm Jason. </p>
          <p className="desc">
            I'm a new grad looking for full time software engineering and
            technology positions.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
