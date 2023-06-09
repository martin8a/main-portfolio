import React from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const TerminalAnimation = ({ children }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 1 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 1, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: '#DFFFC6',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default TerminalAnimation;
