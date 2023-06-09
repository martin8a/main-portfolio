import React from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const NavItemAnimation = ({ children }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default NavItemAnimation;
