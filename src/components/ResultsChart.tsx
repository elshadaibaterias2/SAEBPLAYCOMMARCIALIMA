import React from 'react';
import { QuizAnswer } from '../contexts/QuizContext';
import { categories } from '../data/questions';

interface ResultsChartProps {
  answers: QuizAnswer[];
}

export function ResultsChart({ answers }: ResultsChartProps) {
  const categoryStats = categories.map(category => {
    const categoryAnswers = answers.filter(answer => answer.categoria === category);
    const correct = categoryAnswers.filter(answer => answer.isCorrect).length;
    const total = categoryAnswers.length;
    const percentage = total > 0 ? (correct / total) * 100 : 0;
    
    return {
      category,
      correct,
      total,
      percentage
    };
  });

  const overallCorrect = answers.filter(answer => answer.isCorrect).length;
  const overallPercentage = (overallCorrect / answers.length) * 100;

  return (
    <div className="space-y-8">
      {/* Overall Score */}
      <div className="text-center">
        <div className="inline-block">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke={overallPercentage >= 70 ? '#388E3C' : overallPercentage >= 50 ? '#FF9800' : '#E53935'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${(overallPercentage / 100) * 314} 314`}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {Math.round(overallPercentage)}%
              </div>
              <div className="text-sm text-gray-600">Acertos</div>
            </div>
          </div>
        </div>
        <p className="text-lg font-medium text-gray-800 mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {overallCorrect} de {answers.length} questões corretas
        </p>
      </div>

      {/* Category Breakdown */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Desempenho por Categoria
        </h3>
        {categoryStats
          .filter(stat => stat.total > 0)
          .map(stat => (
          <div key={stat.category} className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {stat.category}
              </span>
              <span className="text-sm font-bold text-gray-800">
                {stat.correct}/{stat.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="h-3 rounded-full transition-all duration-1000"
                style={{ 
                  width: `${stat.percentage}%`,
                  backgroundColor: stat.percentage >= 70 ? '#388E3C' : stat.percentage >= 50 ? '#FF9800' : '#E53935'
                }}
              ></div>
            </div>
            <div className="text-right mt-1">
              <span className="text-sm font-medium text-gray-600">
                {Math.round(stat.percentage)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}