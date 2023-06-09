import '../../index.scss';

import React from 'react';
import MainSidebar from '../MainSidebar/MainSidebar';
import Navbar from '../Navbar/Navbar';
import {
  HomeContainer,
  MainHomeWrapper,
  MainTitle,
  TitleContainer,
} from './LayoutStyles';
import Terminal from '../Terminal/Terminal';
import TitleAnimation from './components/TitleAnimation';

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainHomeWrapper>
        <HomeContainer>
          <div>
            <Terminal></Terminal>
          </div>
          <div>
            <TitleContainer>
              <TitleAnimation>
                <MainTitle>FULL STACK</MainTitle>

                <MainTitle>DEVELOPER</MainTitle>
              </TitleAnimation>
            </TitleContainer>
          </div>
          <MainSidebar></MainSidebar>
        </HomeContainer>
      </MainHomeWrapper>
    </div>
  );
};

export default Layout;
