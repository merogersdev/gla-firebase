import React from "react";
import PropTypes from "prop-types";

import { motion, AnimatePresence } from "framer-motion";

import "./Message.scss";

const Message = ({ type, message }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={`message message--${type}`}>{message}</div>
      </motion.div>
    </AnimatePresence>
  );
};

Message.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

Message.defaultProps = {
  type: "info",
  message: "Loading...",
};

export default Message;
