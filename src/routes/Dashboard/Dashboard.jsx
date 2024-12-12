import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import "preline/preline";
import Drawer from '../../components/Drawer';
import Footer from '../../components/Footer';

function Dashboard() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div>
      <Drawer />
      <div className='px-4 py-6 min-h-[calc(100vh-5rem)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
