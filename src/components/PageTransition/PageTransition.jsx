import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: "0.75", ease:"easeOut"}}
        exit={{ opacity: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;