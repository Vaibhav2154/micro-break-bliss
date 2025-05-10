
import React from 'react';

interface BreathingAnimationProps {
  description: string;
}

const BreathingAnimation: React.FC<BreathingAnimationProps> = ({ description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-microbreak-lavender mb-6 animate-breathe-in flex items-center justify-center shadow-md">
        <div className="w-16 h-16 rounded-full bg-microbreak-blue animate-pulse-slow"></div>
      </div>
      <p className="text-center text-gray-700">{description}</p>
      <p className="text-center text-gray-500 text-sm mt-4">Follow the animation to time your breath</p>
    </div>
  );
};

export default BreathingAnimation;
