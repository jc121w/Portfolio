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
          <p>
            Hello, my name is Jason. I am a Spring 2024 new grad from the
            University of Maryland College Park with a BS in Computer Science.
          </p>
          <p>
            When I'm not coding, I enjoy a wide range of hobbies. Doing
            calisthenics & weightlifting, playing tennis & volleyball, and
            spending time with friends & family are some of my favorite past
            times. I'm always eager to take part in competitve and collaborative
            sports.
          </p>
          These hobbies translate into my coding. I love to learn new
          technologies and work collaboratively alongside like-minded
          individuals. Creating meaningful software and solving complex problems
          whilst doing so excites me and is how I work my best.{" "}
          <p>
            I am open to new opportunities. Feel free to shoot me a message if
            you want to talk. I enjoy meeting new people. Thanks for checking
            out my porfolio!
          </p>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default About;
