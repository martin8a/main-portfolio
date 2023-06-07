import { styled } from 'styled-components';
import { COLORS, FONTS } from '../../assets/resources/resources';

export const NavbarWrapper = styled('div')(() => ({
  display: 'flex',
  padding: '0 20px',
  paddingTop: 40,
  maxWidth: 1370,
  margin: 'auto',
  columnGap: 45,
  justifyContent: 'space-between',
}));

export const NavbarSlider = styled('div')(() => ({
  position: 'relative',
  height: 61,
  display: 'flex',
  alignItems: 'center',
}));

export const LogoWrapper = styled('div')(() => ({
  backgroundColor: COLORS.mainBackground,
  width: 70,
  height: 61,
  position: 'absolute',
  textAlign: 'center',
}));

export const LogoLetter = styled('h3')(() => ({
  fontFamily: FONTS.titles,
  fontSize: 33,
  margin: 0,
  position: 'absolute',
  left: 19,
  top: 5,
}));

export const NavbarMenu = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  columnGap: 25,
}));
