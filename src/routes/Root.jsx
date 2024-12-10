import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

function App() {
  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      // Dynamically import the flyonui package
      const { default: flyonui } = await import('flyonui/flyonui');
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    };
    loadFlyonui();
  }, [location.pathname]);

  return (
    <div className='font-poppins'>
      <Navbar />
    </div>
  );
}

export default App;
