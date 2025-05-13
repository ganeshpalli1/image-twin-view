
import React from 'react';

interface MetricProps {
  label: string;
  value: string;
  percentage?: number;
}

const Metric = ({ label, value, percentage }: MetricProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <span className="font-medium text-gray-700">{label}</span>
      <span className="font-bold text-jobspring-blue">{value}</span>
    </div>
  );
};

interface InterviewMetricsProps {
  metrics: MetricProps[];
  candidateName: string;
  position: string;
}

const InterviewMetrics = ({ metrics, candidateName, position }: InterviewMetricsProps) => {
  return (
    <div className="p-4">
      <div className="text-right mb-2 text-jobspring-blue font-medium">{candidateName}</div>
      <h2 className="text-2xl font-bold mb-6">{position}</h2>
      {metrics.map((metric, index) => (
        <Metric key={index} {...metric} />
      ))}
    </div>
  );
};

export default InterviewMetrics;
