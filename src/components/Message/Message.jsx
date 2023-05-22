import React from 'react';

// Framer Motion for Animations
import { motion, AnimatePresence } from 'framer-motion';

// Styles
import './Message.scss';

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

export default Message;
