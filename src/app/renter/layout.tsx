import React from 'react';

import NavBar from '@/components/RenterDashboardComponent/layout/NavBar';
import SideBar from '@/components/RenterDashboardComponent/layout/SideBar';

interface RenterDashboardLayoutProps {
  children: React.ReactNode;
}

const RenterDashboardLayout: React.FC<RenterDashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='ml-20 flex flex-1 flex-col '>
        <NavBar />
        <div className='max-h-screen flex-1 bg-green-500'>{children}</div>
      </div>
    </div>
  );
};

export default RenterDashboardLayout;
