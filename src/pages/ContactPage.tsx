import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Mensagem Enviada!
            </h2>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Obrigado pelo seu contato! Responderemos em breve.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Enviar Nova Mensagem
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Entre em Contato
                </h1>
                <p className="text-xl opacity-90" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Tire suas dúvidas ou envie sugestões
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Fale Conosco
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Estamos aqui para ajudar você a melhorar seu desempenho em Língua Portuguesa. 
                  Entre em contato conosco para esclarecer dúvidas, enviar sugestões ou reportar problemas.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Suporte Educacional
                      </h3>
                      <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        Nossa equipe está preparada para ajudar professores e alunos com questões pedagógicas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Feedback e Sugestões
                      </h3>
                      <p className="text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        Suas opiniões são importantes para tornar a plataforma ainda melhor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                      placeholder="Digite sua mensagem, dúvida ou sugestão..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}