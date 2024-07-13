import React, { useState, useEffect, useRef } from "react";
import { delay, motion, px } from "framer-motion";
import "./hamburger.css";
import Links from "./links/Links";
import ToggleButton from "./button/ToggleButton";
import OutsideClick from "./OutsideClick";

const Hamburger = ({ animationControl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarRef = useRef(null);
  const clickedOutside = OutsideClick(sideBarRef);
  useEffect(() => {
    if (clickedOutside && isOpen) {
      setIsOpen(false);
      !isOpen
        ? animationControl.start({ opacity: 0.75 })
        : animationControl.start({ opacity: 1, transition: { delay: 0.4 } });
    }
  }, [clickedOutside]);

  const variants = {
    close: {
      x: "-100%",
      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 23,
      },
    },
  };
  const toggleBar = () => {
    setIsOpen(!isOpen);
    !isOpen
      ? animationControl.start({ opacity: 0 })
      : animationControl.start({ opacity: 1, transition: { delay: 0.4 } });
  };

  return (
    <motion.div
      ref={sideBarRef}
      animate={isOpen ? "open" : "close"}
      className="sidebar"
      initial="close"
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton toggle={toggleBar}></ToggleButton>
    </motion.div>
  );
};

export default Hamburger;
