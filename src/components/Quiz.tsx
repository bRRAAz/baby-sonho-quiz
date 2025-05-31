
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Clock, Moon, Heart, ArrowRight, CheckCircle, Star, AlertTriangle, Zap } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      id: 1,
      question: "🚨 SITUAÇÃO DE EMERGÊNCIA: Seu bebê está transformando sua vida num INFERNO?",
      options: [
        "😭 Sim, estou virando um zumbi",
        "😵 Durmo menos de 3 horas seguidas",
        "🤯 Meu relacionamento está acabando",
        "💀 Todas as opções acima (SOCORRO!)"
      ]
    },
    {
      id: 2,
      question: "⏰ Quantas HORAS você perde TODA NOITE tentando fazer seu bebê dormir?",
      options: [
        "1-2 horas (ainda tenho esperança)",
        "2-4 horas (começando a desesperar)",
        "4-6 horas (quero sumir do mapa)",
        "A NOITE TODA (estou no limite!)"
      ]
    },
    {
      id: 3,
      question: "💸 Quanto você já GASTOU tentando resolver isso sem sucesso?",
      options: [
        "Menos de R$ 500",
        "R$ 500 - R$ 1.000",
        "R$ 1.000 - R$ 2.000",
        "Mais de R$ 2.000 (e nada funcionou!)"
      ]
    },
    {
      id: 4,
      question: "🆘 Se eu te dissesse que existe um MÉTODO PROIBIDO que resolve tudo em dias?",
      options: [
        "🤔 Seria bom demais pra ser verdade",
        "😍 EU PAGARIA QUALQUER COISA!",
        "😱 Por favor, me salve dessa tortura",
        "🔥 QUERO AGORA MESMO!"
      ]
    },
    {
      id: 5,
      question: "💀 Qual é seu MAIOR MEDO neste momento?",
      options: [
        "Meu bebê nunca vai dormir direito",
        "Vou ter uma depressão pós-parto",
        "Meu casamento vai acabar",
        "Vou desmaiar de exaustão"
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
      <Card className="w-full max-w-3xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-white to-red-50">
        <CardHeader className="text-center pb-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-400 p-4 rounded-full animate-pulse">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <CardTitle className="text-4xl font-black mb-2">
            🚨 CÓDIGO VERMELHO! 🚨
          </CardTitle>
          <p className="text-xl font-bold text-yellow-200">
            SITUAÇÃO CRÍTICA DETECTADA!
          </p>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <div className="bg-gradient-to-r from-red-100 to-red-200 p-6 rounded-lg border-l-8 border-red-500">
            <h3 className="text-2xl font-black text-red-700 mb-4 flex items-center">
              <Zap className="h-8 w-8 mr-2 text-yellow-500" />
              ⚠️ ALERTA MÁXIMO: VOCÊ ESTÁ NO LIMITE!
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Suas respostas revelam uma situação <strong className="text-red-600 text-xl">DESESPERADORA</strong>. 
              Você está literalmente se destruindo e seu bebê também está sofrendo!
            </p>
            <div className="bg-white p-4 rounded-lg border-2 border-red-300">
              <p className="text-red-700 font-bold text-center text-lg">
                💀 A CADA DIA QUE PASSA, VOCÊ ESTÁ MAIS PERTO DO COLAPSO TOTAL! 💀
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg border-2 border-yellow-400">
            <h3 className="text-2xl font-black text-orange-700 mb-4 text-center">
              🚨 MAS CALMA... EXISTE UMA SOLUÇÃO! 🚨
            </h3>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-black text-red-600 mb-2 animate-pulse">
                💤 SONECA DOS SONHOS
              </h2>
              <p className="text-xl font-bold text-gray-800">
                O MÉTODO PROIBIDO QUE FAZ BEBÊ DORMIR COMO ANJO!
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-400">
            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              🎯 O QUE VOCÊ VAI CONSEGUIR:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✅</span>
                <span className="font-semibold">Adeus choradeira sem fim</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✅</span>
                <span className="font-semibold">Olá noites de sono profundo</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✅</span>
                <span className="font-semibold">Bebê pega no sono com facilidade</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✅</span>
                <span className="font-semibold">SEM traumas, SEM culpa</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-400">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-black text-purple-700 mb-2">
                🎁 BÔNUS EXCLUSIVO HOJE! 🎁
              </h3>
              <p className="text-lg font-bold text-gray-800">
                Checklist da Rotina Noturna Perfeita
              </p>
              <p className="text-sm text-purple-600 font-semibold">
                (Valor: R$ 97,00 - GRÁTIS hoje!)
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
            <div className="text-center mb-4">
              <p className="text-lg text-gray-800 font-semibold mb-2">
                💥 <strong>Já transformou a vida de centenas de pais.</strong>
              </p>
              <p className="text-xl font-black text-red-600">
                AGORA VAI TRANSFORMAR A SUA!
              </p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-1 rounded-lg animate-pulse">
              <Button 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black py-6 px-8 text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={() => window.open('https://seu-link-de-produto.com', '_blank')}
              >
                <Zap className="h-6 w-6 mr-2" />
                ⚡ CLIQUE AGORA - ANTES QUE EU DESMAIE! ⚡
              </Button>
            </div>
            
            <div className="bg-red-100 p-4 rounded-lg border-2 border-red-400">
              <p className="text-red-700 font-bold text-lg">
                ⏰ <strong>URGENTE:</strong> Antes que você desmaie de exaustão e desista da vida!
              </p>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Transformação em dias
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Método comprovado
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-1" />
                Sem traumas
              </div>
            </div>

            <Button 
              variant="outline" 
              onClick={resetQuiz}
              className="mt-6 text-gray-600 hover:text-gray-800"
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
      <CardHeader className="text-center bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-400 p-3 rounded-full animate-pulse">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <CardTitle className="text-2xl font-black mb-2">
          🚨 QUIZ DE EMERGÊNCIA 🚨
        </CardTitle>
        <p className="text-yellow-200 text-sm font-bold">
          Descubra em 2 minutos se você está no LIMITE!
        </p>
        <div className="mt-4 bg-white/20 rounded-full h-3">
          <div 
            className="bg-yellow-400 h-3 rounded-full transition-all duration-500 animate-pulse"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
        <p className="text-xs mt-2 text-yellow-100">
          Pergunta {currentQuestion + 1} de {questions.length}
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6 leading-relaxed">
            {questions[currentQuestion].question}
          </h3>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full text-left p-4 h-auto hover:bg-red-50 hover:border-red-300 transition-all duration-200 hover:scale-102 font-semibold"
                onClick={() => handleAnswer(option)}
              >
                <span className="block text-sm">{option}</span>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
          <p className="text-sm text-red-800 font-bold">
            🔥 <strong>ATENÇÃO:</strong> Este eBook não é para pais "mais ou menos". 
            É pra quem quer SALVAR suas noites!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Quiz;
