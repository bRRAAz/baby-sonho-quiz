
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Clock, Moon, Heart, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      id: 1,
      question: "Há quanto tempo você está enfrentando dificuldades com o sono do seu bebê?",
      options: [
        "Menos de 1 mês",
        "1-3 meses",
        "3-6 meses",
        "Mais de 6 meses"
      ]
    },
    {
      id: 2,
      question: "Quantas vezes por noite seu bebê acorda?",
      options: [
        "1-2 vezes",
        "3-4 vezes",
        "5-6 vezes",
        "Mais de 6 vezes"
      ]
    },
    {
      id: 3,
      question: "Quanto tempo você gasta tentando fazer seu bebê dormir?",
      options: [
        "Menos de 30 minutos",
        "30 minutos a 1 hora",
        "1-2 horas",
        "Mais de 2 horas"
      ]
    },
    {
      id: 4,
      question: "Como você se sente após uma noite mal dormida?",
      options: [
        "Um pouco cansado(a)",
        "Muito cansado(a)",
        "Exausto(a)",
        "Completamente esgotado(a)"
      ]
    },
    {
      id: 5,
      question: "O que você mais deseja neste momento?",
      options: [
        "Uma noite de sono completa",
        "Que meu bebê durma sozinho",
        "Ter mais energia durante o dia",
        "Todas as opções acima"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
            🎯 Resultado do Seu Quiz
          </CardTitle>
          <div className="flex justify-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-400">
            <h3 className="text-xl font-semibold text-red-700 mb-3">
              ⚠️ ALERTA: Situação Crítica Detectada!
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Com base nas suas respostas, identificamos que você está enfrentando uma situação 
              <strong className="text-red-600"> extremamente desgastante</strong> que pode afetar 
              seriamente sua saúde e bem-estar familiar.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
              <Baby className="h-6 w-6 mr-2" />
              O Que Isso Significa Para Você:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Esgotamento físico e mental progressivo
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Impacto negativo no desenvolvimento do bebê
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Estresse familiar e relacionamentos abalados
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Diminuição da imunidade e produtividade
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
              <Heart className="h-6 w-6 mr-2" />
              A Boa Notícia:
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Você não precisa passar por isso sozinho(a)!</strong> Milhares de pais já 
              transformaram completamente o sono dos seus bebês com nosso método comprovado.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 italic">
                "Em apenas 7 dias, minha filha começou a dormir a noite toda. 
                Foi uma mudança de vida para nossa família!" - Maria, mãe da Sofia
              </p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-1 rounded-lg">
              <Button 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={() => window.open('https://seu-link-de-produto.com', '_blank')}
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                SIM! QUERO TRANSFORMAR O SONO DO MEU BEBÊ AGORA
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Resultados em 7 dias
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Garantia de 30 dias
              </div>
            </div>

            <p className="text-xs text-gray-500">
              ⏰ <strong>Oferta por tempo limitado!</strong> Não perca esta oportunidade única.
            </p>

            <Button 
              variant="outline" 
              onClick={resetQuiz}
              className="mt-4 text-gray-600 hover:text-gray-800"
            >
              Refazer o Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-xl mx-auto shadow-2xl border-0 bg-white">
      <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
        <div className="flex justify-center mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Moon className="h-8 w-8" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold mb-2">
          🍼 Quiz do Sono do Bebê
        </CardTitle>
        <p className="text-blue-100 text-sm">
          Descubra em 2 minutos como transformar o sono do seu bebê
        </p>
        <div className="mt-4 bg-white/20 rounded-full h-2">
          <div 
            className="bg-yellow-300 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
        <p className="text-xs mt-2 text-blue-100">
          Pergunta {currentQuestion + 1} de {questions.length}
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
            {questions[currentQuestion].question}
          </h3>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full text-left p-4 h-auto hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 hover:scale-102"
                onClick={() => handleAnswer(option)}
              >
                <span className="block">{option}</span>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-800">
            <strong>💡 Dica:</strong> Seja honesto(a) nas respostas para um resultado mais preciso!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Quiz;
