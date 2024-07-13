import React, { useState } from "react";
import "./toggle_button.css";
import { animate, color, motion } from "framer-motion";
const ToggleButton = ({ toggle }) => {
  return (
    <motion.button className="button" onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="#EDF2F4"
          strokeLinecap="round"
          variants={{
            close: { d: "M 2 2.5 L 20 2.5", stroke: "#EDF2F4" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "#2B2D42" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="#EDF2F4"
          strokeLinecap="round"
          variants={{
            close: { d: "M 2 9.423 L 20 9.423", stroke: "#EDF2F4" },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="#EDF2F4"
          strokeLinecap="round"
          variants={{
            close: { d: "M 2 16.346 L 20 16.346", stroke: "#EDF2F4" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "#2B2D42" },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default ToggleButton;
