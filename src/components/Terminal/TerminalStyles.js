import { styled } from 'styled-components';

export const TerminalWrapper = styled('div')(() => ({
  width: 670,
  height: 600,
  borderRadius: 5,
  overflow: 'hidden',
  marginTop: 50,
  boxShadow: '0px 6px 7px 10px rgba(0, 0, 0, 0.25)',
}));

export const TerminalHeader = styled('div')(() => ({
  height: 30,
  width: '100%',
  backgroundColor: '#333232',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  padding: '0 15px',
}));

export const TerminalWindow = styled('div')(() => ({
  height: 570,
  width: '100%',
  backgroundColor: '#1F1F1F',
}));

export const TerminalButtonsWrapper = styled('div')(() => ({
  width: 56,
  display: 'flex',
  justifyContent: 'space-between',
}));

export const TerminalButtons = styled('div')(({ color }) => ({
  width: 13,
  height: 13,
  borderRadius: 7,
  backgroundColor: color,
}));
