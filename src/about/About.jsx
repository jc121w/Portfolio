import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import School from "./School";

const About = ({ animationControl }) => {
  const aboutVariants = {
    animate: {
      transition: { staggerChildren: 0.5 },
    },
    initial: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
  };
  const aboutComponentVariants = {
    animate: { x: 0, opacity: 1 },
    initial: { x: 300, opacity: 0 },
  };
  return (
    <motion.div
      animate={animationControl}
      className="container"
      whileInView="animate"
      initial="initial"
      variants={aboutVariants}
    >
      <motion.div variants={aboutComponentVariants}>
        <School />
      </motion.div>

      <motion.div className="about_text" variants={aboutComponentVariants}>
        <div className="title">About Me</div>
        <span>
          I am an aspiring software engineer with a passion for building
          innovative and impactful solutions. I am eager to work in
          collaborative environments, where I can contribute and interact with
          team members and learn from seasoned professionals. Beyond coding, I
          enjoy fitness and competitive sports. Tennis, volleyball, and table
          tennis are some of my favorite. I am excited to bring my creativity,
          technical expertise, and dedication to a forward-thinking
          organization, where I can grow and make an impact.
        </span>
      </motion.div>
    </motion.div>
  );
};

export default About;
