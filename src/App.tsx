import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { QuizPage } from './pages/QuizPage';
import { ResultsPage } from './pages/ResultsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuizProvider, useQuiz } from './contexts/QuizContext';

type Page = 'home' | 'quiz' | 'results' | 'about' | 'contact';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { dispatch } = useQuiz();

  const handleStartQuiz = (category?: string) => {
    dispatch({ type: 'START_QUIZ', payload: { category } });
    setCurrentPage('quiz');
  };

  const handleQuizComplete = () => {
    setCurrentPage('results');
  };

  const handleRetryQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' });
    setCurrentPage('home');
  };

  const handleBackToHome = () => {
    dispatch({ type: 'RESET_QUIZ' });
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onStartQuiz={handleStartQuiz} />;
      case 'quiz':
        return <QuizPage onComplete={handleQuizComplete} onBack={() => setCurrentPage('home')} />;
      case 'results':
        return <ResultsPage onHome={handleBackToHome} onRetry={handleRetryQuiz} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

function App() {
  return (
    <QuizProvider>
      <AppContent />
    </QuizProvider>
  );
}

export default App;