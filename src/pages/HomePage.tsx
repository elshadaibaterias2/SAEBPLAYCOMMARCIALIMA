import React from 'react';
import { Play, BookOpen, Target, Award } from 'lucide-react';
import { CategoryCard } from '../components/CategoryCard';
import { categories } from '../data/questions';

interface HomePageProps {
  onStartQuiz: (category?: string) => void;
}

export function HomePage({ onStartQuiz }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            SaebPlay com Márcia Lima
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Bem-vindo ao SaebPlay com Márcia Lima — a plataforma gratuita para alunos e professores testarem seus conhecimentos em Língua Portuguesa, baseada na Matriz de Referência do Saeb.
          </p>
          <button
            onClick={() => onStartQuiz()}
            className="bg-white text-red-600 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Play className="inline-block w-6 h-6 mr-2" />
            Começar Quiz
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Baseado no Saeb
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Questões alinhadas com a Matriz de Referência do Sistema de Avaliação da Educação Básica
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Feedback Imediato
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Receba feedback instantâneo e aprenda com seus erros durante o quiz
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Resultados Detalhados
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Acompanhe seu progresso com relatórios visuais e sugestões personalizadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Categorias de Língua Portuguesa
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard 
                key={category} 
                category={category} 
                onStartQuiz={onStartQuiz}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}