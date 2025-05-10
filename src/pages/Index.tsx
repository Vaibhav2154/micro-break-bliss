import { useState, useEffect } from 'react';
import TakeBreakButton from '../components/TakeBreakButton';
import BreakCard from '../components/BreakCard';
import { getRandomActivity, BreakActivity } from '../data/breakActivities';
import { useIsMobile } from '../hooks/use-mobile';
import { useToast } from '../hooks/use-toast';
import { Sparkles, Coffee, Clock, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Index = () => {
  const [currentBreak, setCurrentBreak] = useState<BreakActivity | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [breakCount, setBreakCount] = useState(0);
  const [streakDays, setStreakDays] = useState(0);
  const [lastBreakTime, setLastBreakTime] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  // Load stats from localStorage on mount
  useEffect(() => {
    const storedCount = localStorage.getItem('microBreakCount');
    const storedStreak = localStorage.getItem('microBreakStreak');
    const storedLastBreak = localStorage.getItem('lastBreakTime');
    
    if (storedCount) setBreakCount(parseInt(storedCount, 10));
    if (storedStreak) setStreakDays(parseInt(storedStreak, 10));
    if (storedLastBreak) setLastBreakTime(storedLastBreak);
    
    // Check if it's a new day to update streak
    const lastBreakDate = storedLastBreak ? new Date(storedLastBreak).toDateString() : null;
    const today = new Date().toDateString();
    
    if (lastBreakDate && lastBreakDate !== today) {
      // Reset daily count for the new day
      setBreakCount(0);
      localStorage.setItem('microBreakCount', '0');
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
      
      // Update break count
      setBreakCount(prev => prev + 1);
      
      // Update last break time
      const now = new Date().toISOString();
      setLastBreakTime(now);
      localStorage.setItem('lastBreakTime', now);
      
      // Update streak if needed
      const today = new Date().toDateString();
      const lastBreakDate = lastBreakTime ? new Date(lastBreakTime).toDateString() : null;
      
      if (!lastBreakDate || lastBreakDate !== today) {
        const newStreak = streakDays + 1;
        setStreakDays(newStreak);
        localStorage.setItem('microBreakStreak', newStreak.toString());
        
        // Show toast for streak milestone
        if (newStreak > 0 && newStreak % 5 === 0) {
          toast({
            title: `${newStreak} Day Streak! 🎉`,
            description: "You're making wellness a habit. Keep it up!",
            duration: 5000,
          });
        }
      }
      
      setIsLoading(false);
    }, 600);
  };

  const handleCloseBreak = () => {
    setCurrentBreak(null);
    
    // Show toast after completing break
    if (breakCount > 0 && breakCount % 3 === 0) {
      toast({
        title: "Making great progress!",
        description: `You've taken ${breakCount} breaks today. Your eyes thank you!`,
        duration: 4000,
      });
    }
  };

  const formatTimeAgo = (timeString: string | null) => {
    if (!timeString) return 'Never';
    
    const past = new Date(timeString).getTime();
    const now = new Date().getTime();
    const diff = now - past;
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  };

  return (
    <div className="microbreak-container flex flex-col min-h-screen bg-gradient-to-b from-white to-microbreak-lavender/20 px-4 py-8 md:py-12">
      {/* Header with animated gradient */}
      <div className="mb-8 md:mb-12 text-center relative">
        <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-r from-microbreak-lavender via-microbreak-blue to-microbreak-tertiary animate-gradient-slow rounded-full" />
        
        <div className="flex items-center justify-center mb-3">
          <Sparkles className="mr-2 text-microbreak-tertiary" size={28} />
          <h1 className="text-3xl md:text-4xl font-bold text-microbreak-tertiary">
            MicroBreaks
          </h1>
        </div>
        
        <p className="text-gray-600 max-w-md mx-auto">
          Take a short 1-3 minute break to refresh your mind and body
        </p>
      </div>

      {/* Stats cards */}
      {!currentBreak && !isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-microbreak-lavender/30 shadow-sm hover:shadow transition-shadow">
            <CardContent className="flex items-center p-4">
              <div className="h-10 w-10 rounded-full bg-microbreak-lavender/20 flex items-center justify-center mr-3">
                <Coffee size={20} className="text-microbreak-tertiary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Breaks Today</p>
                <p className="text-xl font-bold text-gray-800">{breakCount}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-microbreak-lavender/30 shadow-sm hover:shadow transition-shadow">
            <CardContent className="flex items-center p-4">
              <div className="h-10 w-10 rounded-full bg-microbreak-lavender/20 flex items-center justify-center mr-3">
                <BarChart3 size={20} className="text-microbreak-tertiary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Day Streak</p>
                <p className="text-xl font-bold text-gray-800">{streakDays}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-microbreak-lavender/30 shadow-sm hover:shadow transition-shadow">
            <CardContent className="flex items-center p-4">
              <div className="h-10 w-10 rounded-full bg-microbreak-lavender/20 flex items-center justify-center mr-3">
                <Clock size={20} className="text-microbreak-tertiary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Break</p>
                <p className="text-xl font-bold text-gray-800">{formatTimeAgo(lastBreakTime)}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main content */}
      <div className="w-full max-w-md mx-auto relative min-h-[400px] flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-microbreak-lavender/30">
        {isLoading ? (
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-48 bg-microbreak-lavender/60 rounded-lg mb-4"></div>
            <div className="h-32 w-32 rounded-full bg-microbreak-lavender/40 mb-4"></div>
            <p className="text-gray-400">Finding the perfect break for you...</p>
          </div>
        ) : currentBreak ? (
          <BreakCard activity={currentBreak} onClose={handleCloseBreak} />
        ) : (
          <div className="text-center">
            <div className="mb-8">
              {/* <img 
                src="/assets/meditation.svg" 
                alt="Take a break" 
                className="w-40 h-40 mx-auto mb-6 opacity-80" 
              /> */}
              <h2 className="text-2xl font-medium text-gray-700 mb-2">Ready for a break?</h2>
              <p className="text-gray-500 mb-6 max-w-xs mx-auto">
                Remember to take short breaks every 30 minutes to reduce eye strain and improve focus
              </p>
            </div>
            
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
      <div className="mt-auto pt-12 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2025 MicroBreaks | Created with ❤️ by Vaibhav
        </p>
      </div>
    </div>
  );
};

export default Index;
