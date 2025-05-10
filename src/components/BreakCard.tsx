
import React, { useState, useEffect } from 'react';
import { BreakActivity } from '../data/breakActivities';
import BreathingAnimation from './BreathingAnimation';
import StretchGuide from './StretchGuide';
import EyeExercise from './EyeExercise';
import QuoteDisplay from './QuoteDisplay';
import MindfulQuestion from './MindfulQuestion';
import { X } from 'lucide-react';

interface BreakCardProps {
  activity: BreakActivity;
  onClose: () => void;
}

const BreakCard: React.FC<BreakCardProps> = ({ activity, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(activity.duration || 0);
  const [timerActive, setTimerActive] = useState(!!activity.duration);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timeLeft, timerActive]);

  const renderContent = () => {
    switch (activity.type) {
      case 'breathing':
        return <BreathingAnimation description={activity.description} />;
      case 'stretch':
        return <StretchGuide description={activity.description} />;
      case 'eye':
        return <EyeExercise description={activity.description} />;
      case 'quote':
        return <QuoteDisplay quote={activity.description} />;
      case 'mindful':
        return <MindfulQuestion question={activity.description} />;
      default:
        return <p>{activity.description}</p>;
    }
  };

  return (
    <div className="microbreak-card w-full max-w-md mx-auto animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-microbreak-tertiary">{activity.title}</h2>
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-microbreak-tertiary transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="my-6">
        {renderContent()}
      </div>
      
      {timerActive && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-microbreak-primary h-2 rounded-full transition-all duration-1000" 
              style={{ width: `${(timeLeft / (activity.duration || 1)) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{timeLeft} seconds remaining</p>
        </div>
      )}
      
      {!timerActive && (
        <button 
          onClick={onClose}
          className="mt-4 w-full py-2 bg-microbreak-lavender hover:bg-microbreak-blue text-microbreak-tertiary rounded-lg transition-colors"
        >
          Done - Back to Work
        </button>
      )}
    </div>
  );
};

export default BreakCard;
