import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';

const FullPageLoader = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Tab') {
        event.preventDefault();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={styles.loaderWrapper}>
      <CircularProgress size={40} color='primary' />
    </div>
  );
};

const styles = {
  loaderWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent white background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // High z-index to overlay on top of everything
  },
};

export default FullPageLoader;
