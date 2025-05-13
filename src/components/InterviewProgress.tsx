
import React from 'react';
import { cn } from '@/lib/utils';

type InterviewRound = {
  name: string;
  active: boolean;
  completed: boolean;
};

interface InterviewProgressProps {
  rounds: InterviewRound[];
}

const InterviewProgress = ({ rounds }: InterviewProgressProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-1">
        <div className="w-full bg-jobspring-gray h-2 rounded-full">
          <div 
            className="h-full bg-jobspring-blue rounded-full" 
            style={{ 
              width: `${(rounds.findIndex(r => r.active) / (rounds.length - 1)) * 100}%` 
            }}
          />
        </div>
      </div>
      <div className="flex justify-between w-full">
        {rounds.map((round, index) => (
          <div key={index} className="flex flex-col items-center">
            <span 
              className={cn(
                "text-sm font-medium",
                round.active || round.completed ? "text-jobspring-blue" : "text-gray-400"
              )}
            >
              {round.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewProgress;
