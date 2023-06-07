/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const SideBarSvg = (props) => {
  const { reversed = false } = props;
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

  if (reversed) {
    return (
      <motion.svg
        width="36"
        height="459"
        viewBox="0 0 36 459"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M4 452V452C2.34315 452 1 453.343 1 455V455C1 456.657 2.34315 458 4 458V458C5.65685 458 7 456.657 7 455V455C7 453.343 5.65685 452 4 452V452ZM4 452L4.00002 270L30 270C32.7614 270 35 267.761 35 265L35 6C35 3.23857 32.7615 1 30 1L5.00004 0.999997"
          stroke="black"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    );
  }

  return (
    <motion.svg
      width="36"
      height="459"
      viewBox="0 0 36 459"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M32 7V7C33.6569 7 35 5.65685 35 4V4C35 2.34315 33.6569 1 32 1V1C30.3431 1 29 2.34315 29 4V4C29 5.65685 30.3431 7 32 7V7ZM32 7V189H6C3.23858 189 1 191.239 1 194V453C1 455.761 3.23858 458 6 458H31"
        stroke="black"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
    </motion.svg>
  );
};

export default SideBarSvg;
