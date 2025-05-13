
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TotalTimerProps {
  initialTime: number; // Time in seconds
}

const TotalTimer = ({ initialTime }: TotalTimerProps) => {
  const [seconds, setSeconds] = useState(initialTime);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center">
      <span className="mr-2 font-medium">Total interview time:</span>
      <Clock className="w-5 h-5 mr-1 inline" />
      <span className="font-mono">{formatTime(seconds)}</span>
    </div>
  );
};

export default TotalTimer;
