import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 768 }); // Default to medium screen

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth });
      };

      // Set initial size
      setWindowSize({ width: window.innerWidth });

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};
