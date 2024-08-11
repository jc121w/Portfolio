import "./project.css";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import Skill from "./Skill";
import PSkeleton from "./PSkeleton";
import Flutter from "../../assets/flutter.svg";
import Java from "../../assets/Java.png";
import RightArrow from "../../assets/right.svg";
import LeftArrow from "../../assets/left.svg";
const variant1 = {
  animate: {
    transition: { staggerChildren: 0.3 },
  },
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const variant2 = {
  animate: {
    transition: { delayChildren: 2.5, staggerChildren: 0.3 },
  },
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const skillVariants = {
  animate: { x: 0, opacity: 1 },
  initial: { x: 100, opacity: 0 },
};

const projectVariants = {
  initial: { x: 0, opacity: 1 },
  animateL: {
    x: [0, -400, 400, 0],
    opacity: [1, 0, 0, 0, 1],
    transition: { duration: 1.5, times: [0, 0.25, 0.3, 0.5] },
  },
  animateR: {
    x: [0, 400, -400, 0],
    opacity: [1, 0, 0, 0, 1],
    transition: { duration: 1.2, times: [0, 0.25, 0.3, 0.5] },
  },
  exit: { x: 0, opacity: 1 },
};
const Project = ({ animationControl }) => {
  const slideControls = useAnimationControls();
  const [index, setIndex] = useState(0);
  const projectList = [
    <PSkeleton
      key="0"
      name="BookWorm"
      skills={[[{ Flutter }, "Flutter"]]}
      src={Flutter}
      yt="https://youtu.be/HBdVtfTkBEk"
      git="https://github.com/JASONCHENEHCNOSAJ/BookWorm"
      desc="BookWorm is a book organizer app I collaborated with group members to create. Users can use it to record and
    organize their thoughts on books they've read or are reading. Taking
    notes, searching unknown words, and adding books to a personalized
    library are among the many functionalities BookWorm has to offer."
    />,
    <PSkeleton
      key="1"
      name="AdoptAFriend"
      skills={[
        [
          "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
          "HTML",
        ],
        [
          "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
          "CSS",
        ],
        [
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          "JavaScript",
        ],
        [
          "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
          "NodeJS",
        ],
        [
          "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
          "MongoDB",
        ],
      ]}
      src={Flutter}
      yt="https://youtu.be/bqiwh_r4aCc"
      git="https://github.com/JASONCHENEHCNOSAJ/Animal-Shelter-Node-App"
      desc="AdoptAFriend is an app where you can adopt, view, and surrender pets. All the information is stored in a MongoDB collection and interacted with using JS."
    />,
  ];

  const goLeft = () => {
    slideControls.start("animateL");
    setTimeout(() => {
      if (index === 0) {
        setIndex(projectList.length - 1);
      } else {
        setIndex(index - 1);
      }
    }, 300);
  };
  const goRight = () => {
    slideControls.start("animateR");
    setTimeout(() => {
      if (index === projectList.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 300);
  };
  const skillsList = [
    [
      "HTML",
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    ],
    [
      "CSS",
      "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    ],
    [
      "ReactJS",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    ],
    [
      "NodeJS",
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    ],
    [
      "Ruby",
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
    ],
    [
      "MongoDB",
      "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    ],
    [
      "OCaml",
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg",
    ],
    ["Java", Java],
    [
      "C",
      "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    ],
    [
      "Python",
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    ],
    [
      "JavaScript",
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    ],
    ["Flutter", Flutter],
    [
      "SQL",
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    ],
    ["PHP", "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"],
  ];

  return (
    <motion.div className="out">
      <div className="pcontent">
        <div className="skill_container">
          <div className="skill_title"> My Skills </div>{" "}
          <motion.div
            className="skills"
            variants={variant1}
            whileInView="animate"
            initial="initial"
          >
            {skillsList.map((elem, ind) => {
              return (
                <Skill
                  variants={skillVariants}
                  src={elem[1]}
                  name={elem[0]}
                  key={ind}
                />
              );
            })}{" "}
          </motion.div>
        </div>
        <div>
          <div className="skill_title">Projects</div>
          <div className="arrow_row">
            <motion.img
              className="arrows"
              src={LeftArrow}
              alt="left"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={goLeft}
            />
            <motion.div
              animate={slideControls}
              initial="initial"
              variants={projectVariants}
              className="projects"
            >
              {projectList[index]}
            </motion.div>
            <motion.img
              className="arrows"
              src={RightArrow}
              alt="right"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2 }}
              onClick={goRight}
            />
          </div>
          <div className="dots">
            {projectList.map((_, ind) => {
              return (
                <div
                  className={ind === index ? "dot_active" : "dot"}
                  key={ind}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
