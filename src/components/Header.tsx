import React from 'react';
import { BookOpen, Home, Users, Mail, Info } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  return (
    <header className="bg-white shadow-md border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                SaebPlay
              </h1>
              <p className="text-sm text-red-600 font-medium italic" style={{ fontFamily: 'Roboto, sans-serif' }}>
                com Márcia Lima
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Início', icon: Home },
              { id: 'about', label: 'Sobre', icon: Info },
              { id: 'contact', label: 'Contato', icon: Mail }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onPageChange(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  currentPage === id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-green-500 hover:text-white'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}