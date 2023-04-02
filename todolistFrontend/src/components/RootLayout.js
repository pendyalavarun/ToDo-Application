import React from 'react';
import { Outlet } from 'react-router-dom';
import VerticalNavBar from './VerticalNavBar/VerticalNavBar';
function RootLayout() {
  return (
    <div>
     <div className='d-flex  bg-light'>
        <VerticalNavBar/>
        <Outlet />
     </div>
    </div>
  )
}

export default RootLayout;