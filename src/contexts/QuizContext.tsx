import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Question } from '../data/questions';

export interface QuizAnswer {
  questionId: number;
  selectedAnswer: string;
  isCorrect: boolean;
  categoria: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: QuizAnswer[];
  isQuizCompleted: boolean;
  isQuizStarted: boolean;
  selectedCategory: string | null;
}

type QuizAction = 
  | { type: 'START_QUIZ'; payload: { category?: string } }
  | { type: 'ANSWER_QUESTION'; payload: QuizAnswer }
  | { type: 'NEXT_QUESTION' }
  | { type: 'COMPLETE_QUIZ' }
  | { type: 'RESET_QUIZ' };

const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: [],
  isQuizCompleted: false,
  isQuizStarted: false,
  selectedCategory: null,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'START_QUIZ':
      return {
        ...initialState,
        isQuizStarted: true,
        selectedCategory: action.payload.category || null,
      };
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case 'COMPLETE_QUIZ':
      return {
        ...state,
        isQuizCompleted: true,
      };
    case 'RESET_QUIZ':
      return initialState;
    default:
      return state;
  }
}

const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
} | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}