// src/components/Loader/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex space-x-2">
        <div className="w-4 h-10 bg-purple-500 animate-grow"></div>
        <div className="w-4 h-10 bg-purple-500 animate-grow animation-delay-200"></div>
        <div className="w-4 h-10 bg-purple-500 animate-grow animation-delay-400"></div>
        <div className="w-4 h-10 bg-purple-500 animate-grow animation-delay-600"></div>
        <div className="w-4 h-10 bg-purple-500 animate-grow animation-delay-800"></div>
      </div>
    </div>
  );
};

export default Loader;