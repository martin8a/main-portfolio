import React from 'react';
import NavbarSvg from '../../assets/svg/NavbarSvg.js/NavbarSvg';
import {
  LinkNav,
  LogoLetter,
  LogoWrapper,
  NavbarMenu,
  NavbarPosition,
  NavbarSlider,
  NavbarWrapper,
} from './NavbarStyles';
import { motion } from 'framer-motion';
import NavItemAnimation from '../Layout/components/NavItemAnimation';

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
    <NavbarPosition>
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
          <NavItemAnimation>
            <LinkNav href="">Home</LinkNav>
          </NavItemAnimation>
          <NavItemAnimation>
            <LinkNav href="">About</LinkNav>
          </NavItemAnimation>
          <NavItemAnimation>
            <LinkNav href="">Portfolio</LinkNav>
          </NavItemAnimation>
          <NavItemAnimation>
            <LinkNav href="">Blog</LinkNav>
          </NavItemAnimation>
          <NavItemAnimation>
            <LinkNav href="">Contact me</LinkNav>
          </NavItemAnimation>
        </NavbarMenu>
      </NavbarWrapper>
    </NavbarPosition>
  );
};

export default Navbar;
