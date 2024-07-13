import React from "react";
import "./skill.css";
import { motion } from "framer-motion";
const Skill = (props) => {
  return (
    <motion.div
      className="skillbox"
      variants={props.variants}
      whileHover={{
        scale: 1.2,
        transition: { ease: "linear", duration: 0.2 },
      }}
    >
      <img className="skill_img" src={props.src} alt="" />
      <div className="id"> {props.name} </div>
    </motion.div>
  );
};

export default Skill;
