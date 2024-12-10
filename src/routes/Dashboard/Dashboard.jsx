import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
    </div>
  );
}

export default Dashboard;
