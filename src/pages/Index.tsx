
import { useState, useEffect } from 'react';
import TakeBreakButton from '../components/TakeBreakButton';
import BreakCard from '../components/BreakCard';
import { getRandomActivity, BreakActivity } from '../data/breakActivities';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const [currentBreak, setCurrentBreak] = useState<BreakActivity | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [breakCount, setBreakCount] = useState(0);
  const isMobile = useIsMobile();

  // Load break count from localStorage on mount
  useEffect(() => {
    const storedCount = localStorage.getItem('microBreakCount');
    if (storedCount) {
      setBreakCount(parseInt(storedCount, 10));
    }
  }, []);

  // Update localStorage when break count changes
  useEffect(() => {
    localStorage.setItem('microBreakCount', breakCount.toString());
  }, [breakCount]);

  const handleTakeBreak = () => {
    setIsLoading(true);
    
    // Simulate a brief loading time for better UX
    setTimeout(() => {
      const activity = getRandomActivity();
      setCurrentBreak(activity);
      setBreakCount(prev => prev + 1);
      setIsLoading(false);
    }, 600);
  };

  const handleCloseBreak = () => {
    setCurrentBreak(null);
  };

  return (
    <div className="microbreak-container flex flex-col items-center justify-center px-4 py-8 md:py-12">
      {/* Logo and header */}
      <div className="mb-8 md:mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-microbreak-tertiary mb-2">
          MicroBreaks
        </h1>
        <p className="text-gray-600 max-w-md">
          Take a short 1-3 minute break to refresh your mind and body
        </p>
      </div>

      {/* Main content */}
      <div className="w-full max-w-md relative min-h-[400px] flex flex-col items-center justify-center">
        {isLoading ? (
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-48 bg-microbreak-lavender rounded-lg mb-4"></div>
            <p className="text-gray-400">Finding the perfect break for you...</p>
          </div>
        ) : currentBreak ? (
          <BreakCard activity={currentBreak} onClose={handleCloseBreak} />
        ) : (
          <div className="text-center">
            <TakeBreakButton onClick={handleTakeBreak} isBreakActive={!!currentBreak} />
            
            {breakCount > 0 && (
              <p className="mt-6 text-sm text-gray-500">
                You've taken {breakCount} break{breakCount !== 1 ? 's' : ''} today. Great job!
              </p>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-8 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2025 MicroBreaks | Created by Vaibhi
        </p>
      </div>
    </div>
  );
};

export default Index;
