import { useRef, useState } from "react";
import "./contact.css";
import * as React from "react";
import { motion, animationControls, useAnimationControls } from "framer-motion";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
const variants = {
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
const textVariants = {
  animate: { x: 0, opacity: 1 },
  initial: { x: -50, opacity: 0 },
};
const pathVariants = {
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2.5, ease: "easeInOut" },
  },
  initial: {
    opacity: 0,
    pathLength: 0,
  },
};
export const Contact = () => {
  const form = useRef();
  const [nameController, setNameController] = useState("");
  const [emailController, setEmailController] = useState("");
  const [msgController, setMsgController] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_auget5j", "template_k35666e", form.current, {
        publicKey: "C-RZKFE5y5tI2FBls",
      })
      .then(
        () => {
          setNameController("");
          setEmailController("");
          setMsgController("");
          setSuccess(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleNameChange = (event) => {
    setNameController(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailController(event.target.value);
  };
  const handleMsgChange = (event) => {
    setMsgController(event.target.value);
  };

  return (
    <div className="contactWrapper">
      {" "}
      <div className="contactContainer">
        <motion.div
          className="text"
          variants={variants}
          whileInView="animate"
          initial="initial"
        >
          <motion.h1 variants={textVariants}>Send me a message</motion.h1>
          <motion.div className="plz_contact" variants={textVariants}>
            Please contact me through this form or directly at
            <motion.span whileHover={{ scale: 1.08 }}>
              <u> jc121w@gmail.com</u>.
            </motion.span>{" "}
          </motion.div>

          <motion.svg
            className="smile_icon"
            width="auto"
            height="200px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={textVariants}
          >
            <motion.ellipse
              cx="15"
              cy="10.5"
              rx="1"
              ry="1.5"
              fill="#2b2d42"
              variants={pathVariants}
              initial="initial"
              whileInView="animate"
            />
            <motion.ellipse
              cx="9"
              cy="10.5"
              rx="1"
              ry="1.5"
              fill="#2b2d42"
              variants={pathVariants}
              initial="initial"
              whileInView="animate"
            />
            <motion.path
              d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
              stroke="#2b2d42"
              stroke-width="1.5"
              stroke-linecap="round"
              variants={pathVariants}
              initial="initial"
              whileInView="animate"
            />
            <motion.path
              d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
              stroke="#2b2d42"
              stroke-width="1.5"
              stroke-linecap="round"
              variants={pathVariants}
              initial="initial"
              whileInView="animate"
            />
          </motion.svg>
        </motion.div>
        <div className="email_res">
          {success && (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Message sent successfully.
              </Alert>
            </Snackbar>
          )}
          {error && (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Message failed.
              </Alert>
            </Snackbar>
          )}
        </div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="email_form"
          whileInView={{ x: 0, opacity: 1, transition: {} }}
          initial={{ x: 50, opacity: 0 }}
        >
          <motion.input
            type="text"
            required
            placeholder="Name"
            name="name"
            value={nameController}
            onChange={handleNameChange}
          />
          <motion.input
            type="email"
            required
            placeholder="Email"
            name="email"
            value={emailController}
            onChange={handleEmailChange}
          />
          <motion.textarea
            required
            rows="8"
            placeholder="Message"
            name="message"
            value={msgController}
            onChange={handleMsgChange}
          ></motion.textarea>
          <motion.button
            className="submit"
            type="submit"
            whileHover={{
              scale: 1.1,
              borderColor: "#EF233C",
              color: "#EF233C",
            }}
            whileTap={{ rotate: "2.5deg" }}
            onClick={handleClick}
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
