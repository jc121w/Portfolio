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
        staggerChildren: 0.2,
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
        I am an aspiring software engineer with a passion for building
        innovative and impactful solutions. My coursework at UMD and personal
        projects has equipped me with a diverse skillset to take on future
        challenges. I am eager to work in collaborative environments, where I
        can contribute and interact with team members and learn from seasoned
        professionals. Beyond coding, I enjoy fitness and competitive sports.
        Tennis, volleyball, and table tennis are some of my favorite. My
        day-to-day actions are driven by my desire to accomplish something that
        will push me to become a more well-rounded and knowledgeable individual.
        I am excited to bring my creativity, technical expertise, and dedication
        to a forward-thinking organization, where I can grow and make a tangible
        impact.
      </motion.div>
    </motion.div>
  );
};

export default About;
