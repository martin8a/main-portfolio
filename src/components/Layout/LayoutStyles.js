import { styled } from 'styled-components';
import { COLORS, DIMENSIONS, FONTS } from '../../assets/resources/resources';

export const MainHomeWrapper = styled('div')(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: DIMENSIONS.maxWidth,
  margin: 'auto',
}));

export const HomeContainer = styled('div')(() => ({
  width: '100%',
  justifyContent: 'space-between',
  display: 'flex',
  marginTop: 50,
}));

export const MainTitle = styled('h1')(() => ({
  fontSize: FONTS.sizeTitle,
  fontFamily: FONTS.titles,
  color: COLORS.mainBackground,
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  letterSpacing: '5px',
  lineHeight: '160px',
  textWrap: 'nowrap',
  margin: '0',
}));

export const TitleContainer = styled('div')(() => ({
  marginLeft: -350,
  marginTop: 100,
}));
