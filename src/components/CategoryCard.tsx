import React from 'react';
import { BookOpen, FileText, Link2, Zap, Palette, MessageSquare } from 'lucide-react';

interface CategoryCardProps {
  category: string;
  onStartQuiz: (category: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Procedimentos de Leitura': <BookOpen className="w-8 h-8" />,
  'Implicações do Suporte e Gênero': <FileText className="w-8 h-8" />,
  'Relação entre Textos': <Link2 className="w-8 h-8" />,
  'Coerência e Coesão': <Zap className="w-8 h-8" />,
  'Recursos Expressivos e Efeitos de Sentido': <Palette className="w-8 h-8" />,
  'Variação Linguística': <MessageSquare className="w-8 h-8" />
};

const categoryDescriptions: Record<string, string> = {
  'Procedimentos de Leitura': 'Desenvolva habilidades de interpretação e compreensão textual.',
  'Implicações do Suporte e Gênero': 'Compreenda diferentes tipos de textos e suas finalidades.',
  'Relação entre Textos': 'Aprenda a comparar e relacionar diferentes textos sobre um tema.',
  'Coerência e Coesão': 'Domine a estrutura argumentativa e organização textual.',
  'Recursos Expressivos e Efeitos de Sentido': 'Identifique figuras de linguagem e recursos estilísticos.',
  'Variação Linguística': 'Reconheça diferentes formas de uso da língua portuguesa.'
};

export function CategoryCard({ category, onStartQuiz }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 transform hover:scale-105">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white">
          {categoryIcons[category]}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {category}
          </h3>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-6 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
        {categoryDescriptions[category]}
      </p>
      
      <button
        onClick={() => onStartQuiz(category)}
        className="w-full bg-blue-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Começar Quiz
      </button>
    </div>
  );
}