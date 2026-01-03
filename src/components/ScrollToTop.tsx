import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top when route changes
    window.scrollTo(0, 0);
    
    // Additional mobile fix - force immediate scroll
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    
    // Another mobile fix with requestAnimationFrame
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
