export interface Question {
  id: number;
  categoria: string;
  questao: string;
  opcoes: string[];
  resposta: string;
}

export const questions: Question[] = [
  {
    "id": 1,
    "categoria": "Procedimentos de Leitura",
    "questao": "Leia o trecho: 'O sol brilhava intensamente naquela manhã de verão.' Qual a informação explícita no texto?",
    "opcoes": ["Era inverno", "O sol estava brilhando", "Era noite", "Estava chovendo"],
    "resposta": "O sol estava brilhando"
  },
  {
    "id": 2,
    "categoria": "Procedimentos de Leitura",
    "questao": "No trecho 'Ele estava radiante com a notícia', o termo 'radiante' significa:",
    "opcoes": ["Bravo", "Feliz", "Cansado", "Triste"],
    "resposta": "Feliz"
  },
  {
    "id": 3,
    "categoria": "Procedimentos de Leitura",
    "questao": "Leia o texto: 'O público aplaudiu de pé após a apresentação.' Qual a informação implícita?",
    "opcoes": ["O público não gostou", "A apresentação foi bem recebida", "Não houve aplausos", "A apresentação foi cancelada"],
    "resposta": "A apresentação foi bem recebida"
  },
  {
    "id": 4,
    "categoria": "Procedimentos de Leitura",
    "questao": "Qual é o tema central de um texto que descreve 'as dificuldades de estudar em tempos de pandemia'?",
    "opcoes": ["A pandemia", "Dificuldades dos estudantes", "A vacina", "O comércio fechado"],
    "resposta": "Dificuldades dos estudantes"
  },
  {
    "id": 5,
    "categoria": "Procedimentos de Leitura",
    "questao": "Em uma reportagem que diz: 'Alguns moradores reclamaram da falta de iluminação', a opinião está em:",
    "opcoes": ["'Moradores reclamaram'", "O bairro está sem luz", "Falta de iluminação pública", "A cidade apagada"],
    "resposta": "'Moradores reclamaram'"
  },
  {
    "id": 6,
    "categoria": "Implicações do Suporte e Gênero",
    "questao": "Uma charge com personagens exagerados tem como finalidade:",
    "opcoes": ["Informar", "Instruir", "Criticar ou satirizar", "Narrar"],
    "resposta": "Criticar ou satirizar"
  },
  {
    "id": 7,
    "categoria": "Implicações do Suporte e Gênero",
    "questao": "Um manual de instruções serve principalmente para:",
    "opcoes": ["Convencer", "Entreter", "Orientar o uso de algo", "Criticar"],
    "resposta": "Orientar o uso de algo"
  },
  {
    "id": 8,
    "categoria": "Relação entre Textos",
    "questao": "Se dois textos tratam do mesmo tema, mas um é favorável e outro é contra, temos:",
    "opcoes": ["Textos idênticos", "Opiniões distintas", "Mesma posição", "Repetição"],
    "resposta": "Opiniões distintas"
  },
  {
    "id": 9,
    "categoria": "Relação entre Textos",
    "questao": "Uma reportagem e uma propaganda podem tratar de um mesmo assunto. A diferença principal está em:",
    "opcoes": ["O tamanho do texto", "A intenção comunicativa", "A presença de imagens", "A gramática"],
    "resposta": "A intenção comunicativa"
  },
  {
    "id": 10,
    "categoria": "Coerência e Coesão",
    "questao": "A tese em um texto argumentativo corresponde:",
    "opcoes": ["Ao título do texto", "À ideia central defendida pelo autor", "Ao exemplo usado no texto", "À conclusão"],
    "resposta": "À ideia central defendida pelo autor"
  },
  {
    "id": 11,
    "categoria": "Coerência e Coesão",
    "questao": "Quando dizemos 'Ele não estudou, portanto, não passou', temos relação de:",
    "opcoes": ["Contraste", "Causa e consequência", "Enumeração", "Comparação"],
    "resposta": "Causa e consequência"
  },
  {
    "id": 12,
    "categoria": "Coerência e Coesão",
    "questao": "O conflito principal de uma narrativa corresponde:",
    "opcoes": ["Aos personagens secundários", "Ao título do texto", "Ao problema central da história", "Ao cenário"],
    "resposta": "Ao problema central da história"
  },
  {
    "id": 13,
    "categoria": "Coerência e Coesão",
    "questao": "A relação 'embora estivesse cansado, continuou trabalhando' expressa:",
    "opcoes": ["Causa", "Condição", "Concessão", "Tempo"],
    "resposta": "Concessão"
  },
  {
    "id": 14,
    "categoria": "Recursos Expressivos e Efeitos de Sentido",
    "questao": "O uso de ironia ocorre quando:",
    "opcoes": ["O autor descreve fatos históricos", "O autor diz algo, mas quer transmitir o contrário", "O texto é científico", "O texto é instrutivo"],
    "resposta": "O autor diz algo, mas quer transmitir o contrário"
  },
  {
    "id": 15,
    "categoria": "Recursos Expressivos e Efeitos de Sentido",
    "questao": "Na frase 'Que bela bagunça você fez!', temos o efeito de:",
    "opcoes": ["Ironia", "Humor", "Formalidade", "Erro gramatical"],
    "resposta": "Ironia"
  },
  {
    "id": 16,
    "categoria": "Recursos Expressivos e Efeitos de Sentido",
    "questao": "O ponto de exclamação em 'Parabéns!' reforça:",
    "opcoes": ["Dúvida", "Indiferença", "Entusiasmo/ênfase", "Neutralidade"],
    "resposta": "Entusiasmo/ênfase"
  },
  {
    "id": 17,
    "categoria": "Recursos Expressivos e Efeitos de Sentido",
    "questao": "Na frase 'O garoto era um leão em campo', o efeito de sentido é produzido por:",
    "opcoes": ["Comparação direta", "Metáfora", "Ironia", "Exagero"],
    "resposta": "Metáfora"
  },
  {
    "id": 18,
    "categoria": "Variação Linguística",
    "questao": "A frase 'Tu vais à escola amanhã?' representa:",
    "opcoes": ["Registro formal", "Norma padrão culta", "Erro gramatical", "Variação regional/dialetal"],
    "resposta": "Norma padrão culta"
  },
  {
    "id": 19,
    "categoria": "Variação Linguística",
    "questao": "A frase 'Ocê vai na festa hoje?' representa:",
    "opcoes": ["Norma padrão", "Variação regional/dialetal", "Erro de português", "Formalidade"],
    "resposta": "Variação regional/dialetal"
  },
  {
    "id": 20,
    "categoria": "Variação Linguística",
    "questao": "O uso de 'você', 'tu' e 'ocês' para a 2ª pessoa mostra:",
    "opcoes": ["Erros de português", "Variações linguísticas", "Sinônimos", "Formalidade"],
    "resposta": "Variações linguísticas"
  }
];

export const categories = [
  "Procedimentos de Leitura",
  "Implicações do Suporte e Gênero", 
  "Relação entre Textos",
  "Coerência e Coesão",
  "Recursos Expressivos e Efeitos de Sentido",
  "Variação Linguística"
];