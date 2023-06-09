import React from 'react';
import {
  TerminalButtons,
  TerminalButtonsWrapper,
  TerminalHeader,
  TerminalWindow,
  TerminalWrapper,
} from './TerminalStyles';

const Terminal = () => {
  return (
    <TerminalWrapper>
      <TerminalHeader>
        <TerminalButtonsWrapper>
          <TerminalButtons color="#C85757"></TerminalButtons>
          <TerminalButtons color="#484848"></TerminalButtons>
          <TerminalButtons color="#55B153"></TerminalButtons>
        </TerminalButtonsWrapper>
      </TerminalHeader>
      <TerminalWindow></TerminalWindow>
    </TerminalWrapper>
  );
};

export default Terminal;
