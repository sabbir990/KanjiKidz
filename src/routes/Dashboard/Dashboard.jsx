import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import "preline/preline";
import Drawer from '../../components/Drawer';

function Dashboard() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div>
      <Drawer />
      <div className='px-4 py-6'>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
