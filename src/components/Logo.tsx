import React from 'react';
import LazyImage from './LazyImage';

function Logo() {
  return (
    <div className="flex items-center overflow-hidden max-h-16 dark:invert">
      <LazyImage
        src="/KIBrueder.png" 
        alt="KI Brueder Logo" 
        className="h-16 w-auto transition-all duration-300 object-contain"
        style={{
          maxHeight: '64px',
          objectFit: 'contain',
          objectPosition: 'center'
        }}
        placeholder="Logo"
      />
    </div>
  );
}

export default Logo;