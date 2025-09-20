import React from 'react';
import { Home, RotateCcw, TrendingUp, Award } from 'lucide-react';
import { ResultsChart } from '../components/ResultsChart';
import { useQuiz } from '../contexts/QuizContext';

interface ResultsPageProps {
  onHome: () => void;
  onRetry: () => void;
}

export function ResultsPage({ onHome, onRetry }: ResultsPageProps) {
  const { state } = useQuiz();
  
  const correctAnswers = state.answers.filter(answer => answer.isCorrect).length;
  const totalQuestions = state.answers.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 80) return "🎉 Excelente! Você domina muito bem os conteúdos do Saeb.";
    if (percentage >= 60) return "👏 Bom trabalho! Continue praticando para melhorar ainda mais.";
    if (percentage >= 40) return "📚 Você está no caminho certo. Revise os temas com mais dificuldade.";
    return "💪 Continue estudando! A prática leva à perfeição.";
  };

  const getSuggestions = () => {
    const categoryPerformance = state.answers.reduce((acc, answer) => {
      if (!acc[answer.categoria]) {
        acc[answer.categoria] = { correct: 0, total: 0 };
      }
      acc[answer.categoria].total++;
      if (answer.isCorrect) {
        acc[answer.categoria].correct++;
      }
      return acc;
    }, {} as Record<string, { correct: number; total: number }>);

    const weakCategories = Object.entries(categoryPerformance)
      .filter(([_, stats]) => (stats.correct / stats.total) < 0.7)
      .map(([category]) => category);

    if (weakCategories.length === 0) {
      return ["Continue praticando todas as categorias para manter seu excelente desempenho!"];
    }

    return [
      `Recomendamos focar nos temas: ${weakCategories.join(', ')}`,
      "Pratique mais questões dessas categorias",
      "Revise conceitos teóricos dos temas com menor pontuação",
      "Use materiais complementares para reforçar o aprendizado"
    ];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-in-up">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Quiz Finalizado!
          </h1>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {getPerformanceMessage()}
          </p>
        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 animate-slide-in-up">
          {/* Chart */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Seus Resultados
            </h2>
            <ResultsChart answers={state.answers} />
          </div>

          {/* Suggestions */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Sugestões de Melhoria
              </h2>
            </div>
            
            <div className="space-y-4">
              {getSuggestions().map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {suggestion}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-blue-800 font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <strong>💡 Dica:</strong> Pratique regularmente para melhorar seu desempenho no Saeb!
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up">
          <button
            onClick={onRetry}
            className="bg-blue-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <RotateCcw className="w-5 h-5" />
            <span>Fazer Novo Quiz</span>
          </button>
          
          <button
            onClick={onHome}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Home className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </button>
        </div>
      </div>
    </div>
  );
}