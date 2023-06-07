import '../../index.scss';

import React from 'react';
import MainSidebar from '../MainSidebar/MainSidebar';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ paddingTop: 80, paddingLeft: 20 }}>
        <MainSidebar></MainSidebar>
      </div>
    </div>
  );
};

export default Layout;
