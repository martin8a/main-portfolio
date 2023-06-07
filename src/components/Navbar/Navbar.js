import React from 'react';
import NavbarSvg from '../../assets/svg/NavbarSvg.js/NavbarSvg';
import {
  LogoLetter,
  LogoWrapper,
  NavbarMenu,
  NavbarSlider,
  NavbarWrapper,
} from './NavbarStyles';
import { motion } from 'framer-motion';

const Navbar = () => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <NavbarWrapper>
      <NavbarSlider>
        <LogoWrapper>
          <LogoLetter>8A</LogoLetter>
          <motion.svg
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M1 1V60H60V1H1Z"
              stroke="black"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        </LogoWrapper>
        <NavbarSvg></NavbarSvg>
      </NavbarSlider>
      <NavbarMenu>
        <a>Home</a>
        <a>About</a>
        <a>Portfolio</a>
        <a>Blog</a>
        <a>Contact me</a>
      </NavbarMenu>
    </NavbarWrapper>
  );
};

export default Navbar;
