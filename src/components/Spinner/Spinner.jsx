import React from 'react';

// Framer Motion for Animations
import { motion, AnimatePresence } from 'framer-motion';

// Styles
import './Spinner.scss';

const Spinner = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className='spinner'>
          <div className='spinner__container'></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Spinner;
