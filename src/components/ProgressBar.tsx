import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
      <div 
        className="bg-gradient-to-r from-blue-600 to-green-500 h-3 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="mt-2 text-center">
        <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Questão {current} de {total}
        </span>
      </div>
    </div>
  );
}