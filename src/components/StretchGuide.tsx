
import React from 'react';

interface StretchGuideProps {
  description: string;
}

const StretchGuide: React.FC<StretchGuideProps> = ({ description }) => {
  return (
    <div className="text-center">
      <div className="w-32 h-32 bg-microbreak-green rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-microbreak-tertiary">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      </div>
      <p className="text-gray-700">{description}</p>
      <p className="text-gray-500 text-sm mt-4">Remember to move slowly and gently</p>
    </div>
  );
};

export default StretchGuide;
