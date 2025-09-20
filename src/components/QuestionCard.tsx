import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string, isCorrect: boolean) => void;
  showFeedback: boolean;
  selectedAnswer: string | null;
}

export function QuestionCard({ question, onAnswer, showFeedback, selectedAnswer }: QuestionCardProps) {
  const handleAnswerClick = (option: string) => {
    if (showFeedback) return; // Prevent multiple clicks after feedback is shown
    
    const isCorrect = option === question.resposta;
    onAnswer(option, isCorrect);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <div className="mb-6">
        <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
          {question.categoria}
        </div>
        <h2 className="text-xl font-bold text-gray-800 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {question.questao}
        </h2>
      </div>
      
      <div className="space-y-3">
        {question.opcoes.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === question.resposta;
          
          let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";
          
          if (showFeedback) {
            if (isSelected && isCorrect) {
              buttonClass += "bg-green-100 border-green-500 text-green-800";
            } else if (isSelected && !isCorrect) {
              buttonClass += "bg-red-100 border-red-500 text-red-800";
            } else if (isCorrect) {
              buttonClass += "bg-green-100 border-green-500 text-green-800";
            } else {
              buttonClass += "bg-gray-100 border-gray-300 text-gray-600";
            }
          } else {
            if (isSelected) {
              buttonClass += "bg-blue-100 border-blue-500 text-blue-800";
            } else {
              buttonClass += "bg-gray-50 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400";
            }
          }
          
          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={showFeedback}
              className={buttonClass}
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {showFeedback && (
                  <>
                    {isSelected && isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                    {!isSelected && isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                  </>
                )}
              </div>
            </button>
          );
        })}
      </div>
      
      {showFeedback && (
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
          <p className="text-blue-800 font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <strong>Resposta correta:</strong> {question.resposta}
          </p>
        </div>
      )}
    </div>
  );
}