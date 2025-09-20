import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProgressBar } from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';
import { useQuiz } from '../contexts/QuizContext';
import { questions, Question } from '../data/questions';

interface QuizPageProps {
  onComplete: () => void;
  onBack: () => void;
}

export function QuizPage({ onComplete, onBack }: QuizPageProps) {
  const { state, dispatch } = useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const filtered = state.selectedCategory 
      ? questions.filter(q => q.categoria === state.selectedCategory)
      : questions;
    setFilteredQuestions(filtered);
  }, [state.selectedCategory]);

  useEffect(() => {
    if (filteredQuestions.length > 0 && state.currentQuestionIndex < filteredQuestions.length) {
      setCurrentQuestion(filteredQuestions[state.currentQuestionIndex]);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else if (filteredQuestions.length > 0 && state.currentQuestionIndex >= filteredQuestions.length) {
      dispatch({ type: 'COMPLETE_QUIZ' });
      onComplete();
    }
  }, [state.currentQuestionIndex, filteredQuestions, dispatch, onComplete]);

  const handleAnswer = (answer: string, isCorrect: boolean) => {
    if (!currentQuestion) return;
    
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: {
        questionId: currentQuestion.id,
        selectedAnswer: answer,
        isCorrect,
        categoria: currentQuestion.categoria
      }
    });
  };

  const handleNext = () => {
    if (state.currentQuestionIndex + 1 >= filteredQuestions.length) {
      dispatch({ type: 'COMPLETE_QUIZ' });
      onComplete();
    } else {
      dispatch({ type: 'NEXT_QUESTION' });
    }
  };

  if (!currentQuestion || filteredQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando questões...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          
          {state.selectedCategory && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
              {state.selectedCategory}
            </div>
          )}
        </div>

        {/* Progress */}
        <ProgressBar current={state.currentQuestionIndex + 1} total={filteredQuestions.length} />

        {/* Question */}
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          showFeedback={showFeedback}
          selectedAnswer={selectedAnswer}
        />

        {/* Next Button */}
        {showFeedback && (
          <div className="mt-8 text-center">
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>
                {state.currentQuestionIndex + 1 >= filteredQuestions.length ? 'Finalizar Quiz' : 'Próxima Questão'}
              </span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}