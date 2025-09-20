import React from 'react';
import { BookOpen, Target, Users, Award } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">
            <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Sobre o SaebPlay com Márcia Lima
            </h1>
            <p className="text-xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Uma plataforma educacional inovadora para o aprendizado de Língua Portuguesa
            </p>
          </div>

          <div className="p-8">
            {/* Mission */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                O SaebPlay com Márcia Lima é um projeto educacional voltado para alunos do Ensino Médio, 
                inspirado na Matriz de Referência do Saeb. Aqui você aprende praticando, de forma interativa e gratuita.
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Nossa plataforma oferece uma experiência gamificada que torna o aprendizado de Língua Portuguesa 
                mais envolvente e eficaz, preparando estudantes para as avaliações do Sistema de Avaliação da 
                Educação Básica (Saeb) e para a vida acadêmica.
              </p>
            </section>

            {/* Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                O que oferecemos
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Conteúdo Alinhado ao Saeb
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      Questões baseadas na Matriz de Referência oficial do Sistema de Avaliação da Educação Básica.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Feedback Inteligente
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      Receba feedback imediato e sugestões personalizadas para melhorar seu desempenho.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Para Alunos e Professores
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      Uma ferramenta completa tanto para o estudo individual quanto para uso em sala de aula.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Totalmente Gratuito
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      Acesso livre e gratuito a todo o conteúdo, democratizando o ensino de qualidade.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Categories */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Categorias Abordadas
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Procedimentos de Leitura',
                  'Implicações do Suporte e Gênero',
                  'Relação entre Textos',
                  'Coerência e Coesão',
                  'Recursos Expressivos e Efeitos de Sentido',
                  'Variação Linguística'
                ].map((category) => (
                  <div key={category} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {category}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Creator */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Sobre Márcia Lima
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-6 border-l-4 border-red-600">
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Educadora especialista em Língua Portuguesa com vasta experiência no ensino médio e preparação 
                  para avaliações educacionais. Márcia Lima desenvolveu esta plataforma com o objetivo de tornar 
                  o aprendizado mais acessível e eficaz, contribuindo para a melhoria da educação brasileira.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}