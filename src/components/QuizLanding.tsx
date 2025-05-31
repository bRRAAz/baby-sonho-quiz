
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Moon, Heart, CheckCircle, Star, Gift, Zap } from 'lucide-react';

const QuizLanding = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Seu bebê demora mais de 30 minutos para dormir?",
      options: [
        "Sim, é uma luta toda noite",
        "Às vezes demora bastante",
        "Raramente demora tanto",
        "Não, dorme rapidinho"
      ]
    },
    {
      id: 2,
      question: "Você acorda mais de 2 vezes por noite?",
      options: [
        "Sim, acordo várias vezes",
        "Acordo umas 2-3 vezes",
        "Acordo apenas 1 vez",
        "Durmo a noite toda"
      ]
    },
    {
      id: 3,
      question: "Você já tentou de tudo (banho, música, colo, etc.) e nada funciona?",
      options: [
        "Sim, tentei tudo e nada resolve",
        "Algumas coisas funcionam às vezes",
        "Tenho algumas estratégias que funcionam",
        "Encontrei o que funciona para meu bebê"
      ]
    },
    {
      id: 4,
      question: "Você se sente cansado(a) o tempo todo?",
      options: [
        "Sim, estou exausto(a)",
        "Sim, bem cansado(a)",
        "Um pouco cansado(a)",
        "Me sinto bem disposto(a)"
      ]
    },
    {
      id: 5,
      question: "Dormir virou uma batalha toda noite?",
      options: [
        "Sim, é uma guerra todas as noites",
        "Na maioria das noites é difícil",
        "Algumas noites são complicadas",
        "Geralmente é tranquilo"
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
    setShowQuiz(false);
  };

  const startQuiz = () => {
    setShowQuiz(true);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
        <Card className="w-full max-w-3xl mx-auto shadow-2xl border-0 bg-white">
          <CardHeader className="text-center pb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-t-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-300 p-4 rounded-full">
                <Star className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold mb-2">
              🌙 Resultado do seu Quiz
            </CardTitle>
            <p className="text-blue-100 text-lg">
              Descobrimos o que está acontecendo!
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6 p-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Heart className="h-6 w-6 mr-2 text-pink-500" />
                Seu diagnóstico
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Seu bebê pode estar preso num ciclo que sabota o sono dele (e o seu também). 
                <strong className="text-blue-600"> A boa notícia?</strong> Isso tem solução — rápida, gentil e realista.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Descubra o método que já ajudou <strong className="text-purple-600">centenas de famílias</strong> a 
                recuperarem o sono, a paz e o bem-estar!
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-300">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-purple-700 mb-2">
                  💤 SONECA DOS SONHOS
                </h2>
                <p className="text-xl font-semibold text-gray-800">
                  O MÉTODO PROIBIDO QUE FAZ BEBÊ DORMIR COMO ANJO!
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                O que você vai receber:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✅</span>
                  <span>Método gentil e sem culpas</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✅</span>
                  <span>Resultados em poucos dias</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✅</span>
                  <span>Técnicas comprovadas</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">✅</span>
                  <span>Rotina noturna perfeita</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg border-2 border-yellow-400">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-orange-700 mb-2 flex items-center justify-center">
                  <Gift className="h-6 w-6 mr-2" />
                  🎁 Bônus Exclusivo!
                </h3>
                <p className="text-lg font-semibold text-gray-800">
                  Checklist da Rotina Noturna Perfeita
                </p>
                <p className="text-sm text-orange-600 font-medium">
                  (Incluso gratuitamente!)
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-lg">
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-8 text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Zap className="h-6 w-6 mr-2" />
                  🎁 QUERO O EBOOK AGORA!
                </Button>
              </div>
              
              <p className="text-green-700 font-semibold text-lg">
                📱 Garante antes que acabe!
              </p>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Baby className="h-4 w-4 mr-1" />
                  Método gentil
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Comprovado
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  Sem culpas
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
      </div>
    );
  }

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
        <Card className="w-full max-w-xl mx-auto shadow-xl border-0 bg-white">
          <CardHeader className="text-center bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-t-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-300 p-3 rounded-full">
                <Moon className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <CardTitle className="text-xl font-bold mb-2">
              🌙 Quiz do Sono do Bebê
            </CardTitle>
            <p className="text-blue-100 text-sm">
              Descubra o que está atrapalhando as noites da sua família
            </p>
            <div className="mt-4 bg-white/20 rounded-full h-2">
              <div 
                className="bg-yellow-300 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
            <p className="text-xs mt-2 text-blue-100">
              Pergunta {currentQuestion + 1} de {questions.length}
            </p>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left p-4 h-auto hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 font-medium"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-6 rounded-full shadow-lg">
              <Baby className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            💤 Seu bebê custa a dormir?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Faça este quiz rápido e descubra o que está atrapalhando as noites da sua família 
            <strong className="text-blue-600"> (e como resolver de forma gentil e sem culpas!)</strong>
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6 bg-white shadow-lg border-0">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Moon className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">🌙 Método Gentil</h3>
            <p className="text-gray-600 text-sm">Sem traumas ou culpas para você e seu bebê</p>
          </Card>

          <Card className="text-center p-6 bg-white shadow-lg border-0">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">✅ Resultados Rápidos</h3>
            <p className="text-gray-600 text-sm">Veja mudanças em poucos dias de aplicação</p>
          </Card>

          <Card className="text-center p-6 bg-white shadow-lg border-0">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-100 p-3 rounded-full">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">💝 Testado por Mães</h3>
            <p className="text-gray-600 text-sm">Centenas de famílias já recuperaram o sono</p>
          </Card>
        </div>

        {/* Quiz Start Card */}
        <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white">
          <CardHeader className="text-center bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold mb-4">
              🎯 Quiz Gratuito: 2 minutos
            </CardTitle>
            <p className="text-blue-100">
              Responda 5 perguntas simples e descubra a solução perfeita para sua família
            </p>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-bold text-gray-800 mb-3">O que você vai descobrir:</h3>
                <div className="text-left space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Por que seu bebê tem dificuldade para dormir</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Qual método funciona melhor para sua situação</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Como criar uma rotina noturna eficaz</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={startQuiz}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Baby className="h-5 w-5 mr-2" />
                🚀 COMEÇAR O QUIZ AGORA!
              </Button>

              <p className="text-sm text-gray-500">
                ⏱️ Apenas 2 minutos • 100% gratuito • Resultados instantâneos
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Já ajudamos mais de 500 famílias a terem noites tranquilas</p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-600 font-medium">4.9/5 (247 avaliações)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizLanding;
