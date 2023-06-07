import React from 'react';
import SideBarSvg from '../../assets/svg/SideBarPart1';
import { MainSidebarStyled, RotateSidebarSvg } from './MainSidebarStyles';

const MainSidebar = () => {
  return (
    <MainSidebarStyled>
      <SideBarSvg></SideBarSvg>
      <RotateSidebarSvg>
        <SideBarSvg reversed></SideBarSvg>
      </RotateSidebarSvg>
    </MainSidebarStyled>
  );
};

export default MainSidebar;
