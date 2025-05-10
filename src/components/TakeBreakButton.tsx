
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface TakeBreakButtonProps {
  onClick: () => void;
  isBreakActive: boolean;
}

const TakeBreakButton = ({ onClick, isBreakActive }: TakeBreakButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <button
      className={`microbreak-button flex items-center gap-2 ${
        isBreakActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } transition-opacity duration-500`}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      disabled={isBreakActive}
    >
      <span>Take a MicroBreak</span>
      <ArrowRight 
        className={`transform transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`}
        size={20}
      />
    </button>
  );
};

export default TakeBreakButton;
