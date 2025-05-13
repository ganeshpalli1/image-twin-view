
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, RefreshCcw, ExitIcon } from 'lucide-react';
import InterviewProgress from './InterviewProgress';
import InterviewTimer from './InterviewTimer';
import TotalTimer from './TotalTimer';
import InterviewMetrics from './InterviewMetrics';
import JobSpringLogo from './JobSpringLogo';

const Interview = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  
  const rounds = [
    { name: 'Screening round', active: true, completed: false },
    { name: 'Technical round', active: false, completed: false },
    { name: 'Behavioral round', active: false, completed: false }
  ];
  
  const questions = [
    {
      id: 1,
      text: "As a UX designer, can you share a specific example of how you adapted your communication style to effectively convey complex design concepts to a non-technical stakeholder?",
      round: 0
    },
    // More questions would go here
  ];
  
  const metrics = [
    { label: "Eye contacting level", value: ": 90%" },
    { label: "Attention score", value: ": 90%" }
  ];

  const handleSkip = () => {
    // Logic to skip to the next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRefresh = () => {
    // Logic to restart the current question
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Header with Logo and Timer */}
        <div className="flex justify-between items-center mb-8">
          <JobSpringLogo />
          <TotalTimer initialTime={140} />
        </div>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <InterviewProgress rounds={rounds} />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Container - Candidate Video */}
          <div className="lg:w-2/3 bg-gray-100 rounded-xl overflow-hidden relative">
            {/* Placeholder for candidate video */}
            <div className="aspect-video bg-gray-200 w-full"></div>
            
            {/* Start Button and Timer Overlay */}
            <div className="absolute bottom-4 left-4 flex gap-3">
              <Button className="bg-jobspring-blue hover:bg-jobspring-lightblue flex items-center gap-2">
                <Mic className="w-4 h-4" />
                <span>Start Answering</span>
              </Button>
              <div className="bg-white px-3 py-1 rounded-md flex items-center">
                <InterviewTimer initialTime={30} />
              </div>
            </div>
          </div>
          
          {/* Right Container - Interviewer Video and Metrics */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {/* Placeholder for interviewer video */}
            <div className="aspect-video bg-gray-200 rounded-xl w-full"></div>
            
            {/* Metrics */}
            <div className="bg-white rounded-xl shadow-sm border p-4">
              <InterviewMetrics 
                metrics={metrics}
                candidateName="Prashanth"
                position="UX Designer"
              />
            </div>
          </div>
        </div>
        
        {/* Question and Controls Section */}
        <div className="mt-8 border rounded-xl p-6">
          <div className="mb-8">
            <div className="text-sm font-medium text-jobspring-blue mb-2">
              {rounds[currentRound].name}
            </div>
            <h2 className="text-lg font-semibold">
              {currentQuestion + 1}. {questions[currentQuestion].text}
            </h2>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                onClick={handleRefresh}
              >
                <RefreshCcw className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={handleSkip}
              >
                skip
              </Button>
            </div>
          </div>
        </div>
        
        {/* Exit and Evaluation Buttons */}
        <div className="mt-6 grid grid-cols-1 gap-4">
          <Button 
            variant="outline" 
            className="bg-gray-900 text-white hover:bg-gray-800 flex items-center justify-center gap-2"
          >
            <ExitIcon className="w-4 h-4" />
            <span>Exit Interview</span>
          </Button>
          <Button 
            variant="outline" 
            className="border-2"
          >
            Evaluation Criteria
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Interview;
