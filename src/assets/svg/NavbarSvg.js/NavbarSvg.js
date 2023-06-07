import React from 'react';
import { motion } from 'framer-motion';

const NavbarSvg = () => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <motion.svg
      width="804"
      height="45"
      viewBox="0 0 804 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M4 7V7C2.34315 7 1 5.65685 1 4V4C1 2.34315 2.34315 1 4 1V1C5.65685 1 7 2.34315 7 4V4C7 5.65685 5.65685 7 4 7V7ZM4 7V19C4 20.6569 5.34315 22 7 22H795C797.761 22 800 24.2386 800 27V38M800 38V38C801.657 38 803 39.3431 803 41V41C803 42.6569 801.657 44 800 44V44C798.343 44 797 42.6569 797 41V41C797 39.3431 798.343 38 800 38V38Z"
        stroke="black"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
    </motion.svg>
  );
};

export default NavbarSvg;
