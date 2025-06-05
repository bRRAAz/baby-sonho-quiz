import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Moon, Heart, CheckCircle, Star, Gift, Zap, Clock, Brain, Shield, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import VideoPlayer from './videoPlayer';
import CountdownTimer from './CountdownTimer';
import ImageCarousel from './ImageCarousel';
import ContactSection from './ContactSection';

const QuizLanding = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [resultScore, setResultScore] = useState(0);

  const benefits = [
    {
      icon: Moon,
      text: "Noites completas de sono",
      description: "Seu bebê dormindo a noite toda"
    },
    {
      icon: Heart,
      text: "Relacionamentos mais fortes",
      description: "Tempo de qualidade em família"
    },
    {
      icon: Clock,
      text: "Rotina simples",
      description: "Fácil de seguir"
    },
    {
      icon: Brain,
      text: "Paz de espírito",
      description: "Menos estresse noturno"
    },
    {
      icon: Star,
      text: "Energia renovada",
      description: "Noites inteiras de descanso"
    },
    {
      icon: Baby,
      text: "Bebê mais feliz",
      description: "Calmo e descansado"
    },
    {
      icon: Shield,
      text: "Fim do cansaço",
      description: "Adeus madrugadas intermináveis"
    },
  ];

  const bonuses = [
    {
      title: "Áudios Mágicos para Acalmar",
      originalPrice: "R$ 97,00",
      description: "Sons especiais que fazem seu bebê relaxar instantaneamente"
    },
    {
      title: "Guia de Rotina Noturna",
      originalPrice: "R$ 67,00",
      description: "Passo a passo completo para criar a rotina perfeita"
    },
    {
      title: "Técnicas de Massagem Relaxante",
      originalPrice: "R$ 47,00",
      description: "Massagens que preparam o bebê para o sono profundo"
    },
    {
      title: "Grupo VIP de Mães",
      originalPrice: "R$ 197,00",
      description: "Comunidade exclusiva com suporte 24h de especialistas"
    }
  ];

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
      // Generate random score between 85 and 100
      const randomScore = Math.floor(Math.random() * (100 - 85 + 1)) + 85;
      setResultScore(randomScore);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setShowQuiz(false);
    setResultScore(0);
  };

  const startQuiz = () => {
    setShowQuiz(true);
  };

  const targetDate = new Date();
  targetDate.setMinutes(targetDate.getMinutes() + 15);

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-between p-3 sm:p-4 flex-col">
        <img src="./assets/logo_nenem.png" className="w-24" />
        <Card className="w-full max-w-xl mx-auto shadow-xl border-0 bg-white flex flex-col">
          <CardHeader className="text-center pb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-t-lg p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              🌙 Resultado do seu Quiz
            </CardTitle>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg">
              Descobrimos o que está acontecendo!
            </p>
          </CardHeader>

          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8">
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-4 rounded-lg border-l-4 border-red-400">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                <strong className="text-red-600">Seu resultado:</strong> Risco de interferência no sono saudável está em <strong>{resultScore}/100</strong>
              </p>
            </div>

            {/* Copy sobre o produto */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Por que o Método Noite de Paz funciona?</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>✅ <strong>Método gentil e respeitoso:</strong> Sem deixar o bebê chorar sozinho</p>
                <p>✅ <strong>Resultados em 7 dias:</strong> Mais de 90% das famílias veem melhora na primeira semana</p>
                <p>✅ <strong>Funciona para todas as idades:</strong> De 4 meses a 3 anos</p>
                <p>✅ <strong>Suporte completo:</strong> Grupo VIP com especialistas 24h</p>
              </div>
            </div>

            <VideoPlayer />
            <Button
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 sm:py-6 px-4 sm:px-8 text-base sm:text-lg md:text-xl shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse"
              onClick={() => window.open('#', '_blank')}
            >
              🎁 QUERO MEU BEBÊ DORMINDO JÁ!
            </Button>

            <div className="mb-3 text-center">
              <p className="text-lg text-red-600 font-semibold mb-1">⚡ OFERTA POR TEMPO LIMITADO</p>
              <CountdownTimer targetDate={targetDate} />
            </div>

            {/* Produto Principal - Preço */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-300">
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-700 mb-2">🌙 Método Noite de Paz</h3>
                <p className="text-gray-700 mb-3">O método completo que já transformou mais de 500 famílias</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl font-bold text-green-600">R$ 197,00</span>
                  <span className="text-lg text-gray-500 line-through">R$ 497,00</span>
                </div>
                <p className="text-sm text-green-600 font-semibold mt-1">60% OFF - Oferta limitada!</p>
              </div>
              <Button
                className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 sm:py-6 px-4 sm:px-8 text-base sm:text-lg md:text-xl shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse"
                onClick={() => window.open('#', '_blank')}
              >
                🎁 QUERO MEU BEBÊ DORMINDO JÁ!
              </Button>
            </div>

            {/* Lista de Bônus Detalhada */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 sm:p-6 rounded-lg border-2 border-yellow-400">
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700 mb-2 flex items-center justify-center">
                  <Gift className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  🎁 Bônus Exclusivos!
                </h3>
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-4">
                  Receba GRÁTIS estes bônus incríveis:
                </p>
              </div>

              <div className="space-y-3">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="bg-white/70 p-3 rounded-lg border border-yellow-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-800 text-sm">{bonus.title}</h4>
                      <div className="text-right">
                        <span className="text-red-500 line-through text-sm">{bonus.originalPrice}</span>
                        <span className="block text-green-600 font-bold text-sm">GRÁTIS!</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">{bonus.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center p-3 bg-green-100 rounded-lg border border-green-300">
                <p className="text-sm font-bold text-green-700">
                  Valor total dos bônus: <span className="line-through">R$ 408,00</span>
                </p>
                <p className="text-lg font-bold text-green-600">GRÁTIS!</p>
              </div>
            </div>

            <div className="bg-green-50 p-2 rounded-2xl border-2 border-green-300 shadow-md">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-3 shadow-lg">
                  <Gift className="h-6 w-6 text-white" />
                </div>

                <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent mb-2">
                  O que você vai conseguir:
                </h2>

                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-2">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-3 bg-white/60 rounded-lg p-2 border border-gray-100/50 hover:bg-emerald-50/50 hover:border-emerald-200 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-200">
                        <IconComponent className="h-4 w-4 text-emerald-600" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                          {benefit.text}
                        </h4>
                        <p className="text-gray-600 text-xs leading-tight truncate">
                          {benefit.description}
                        </p>
                      </div>

                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-emerald-500" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carrossel de Imagens */}
            <ImageCarousel />

            {/* Mais copy sobre garantia e resultados */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-3 text-center">🛡️ Garantia de 30 dias</h3>
              <p className="text-sm text-gray-700 text-center mb-3">
                Se você não ver resultados em 30 dias, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicação.
              </p>
              <div className="text-center">
                <p className="text-xs text-purple-600 font-semibold">
                  Mais de 500 famílias já transformaram suas noites com o Método Noite de Paz
                </p>
              </div>
            </div>

            <div className="text-center space-y-3 sm:space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 sm:py-6 px-4 sm:px-8 text-base sm:text-lg md:text-xl shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse"
                onClick={() => window.open('#', '_blank')}
              >
                🎁 QUERO MEU BEBÊ DORMINDO JÁ!
              </Button>

              <div className="flex items-center justify-center space-x-3 sm:space-x-6 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center">
                  <Baby className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span className="hidden sm:inline">Método gentil</span>
                  <span className="sm:hidden">Gentil</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span>Comprovado</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span className="hidden sm:inline">Sem culpas</span>
                  <span className="sm:hidden">S/ culpas</span>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={resetQuiz}
                className="mt-4 sm:mt-6 text-gray-600 hover:text-gray-800 text-sm sm:text-base"
              >
                Refazer o Quiz
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Seção de Contato e Informações */}
        <ContactSection />

        {/* Rodapé com Copyright */}
        <footer className="w-full max-w-xl mx-auto mt-6 text-center py-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            © 2025 Método Noite de Paz. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            CNPJ: 00.000.000/0001-00 | contato@noitedepaz.com.br
          </p>
        </footer>
      </div>
    );
  }

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-start p-3 sm:p-4 flex-col">
        <img src="/assets/logo_nenem.png" className="w-24" />
        <Card className="w-full max-h-600px max-w-xl mx-auto shadow-xl border-0 bg-white flex flex-col">
          <CardHeader className="text-center bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-t-lg p-4 sm:p-6 flex-shrink-0">

            <CardTitle className="text-lg sm:text-xl font-bold mb-2">
              🌙 Quiz do Sono do Bebê
            </CardTitle>
            <p className="text-blue-100 text-xs sm:text-sm">
              Descubra o que está atrapalhando as noites da sua família
            </p>
            <div className="mt-3 sm:mt-4 bg-white/20 rounded-full h-2">
              <div
                className="bg-yellow-300 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>

          </CardHeader>

          <CardContent className="flex-1 flex flex-col justify-center">
            <div className="flex-1 flex flex-col pt-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-6 sm:mb-4 leading-relaxed text-center">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left p-4 sm:p-5 h-auto hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 font-medium text-sm sm:text-base min-h-[3.5rem] sm:min-h-[4rem] flex items-center"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-start p-3 sm:p-4 flex-col">
      <img src="./assets/logo_nenem.png" className="w-24" />
      <Card className="w-full max-w-xl mx-auto shadow-xl border-0 bg-white flex flex-col">
        <CardHeader className="text-center bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-t-lg p-4 sm:p-6 flex-shrink-0">

          <CardTitle className="text-lg sm:text-xl font-bold mb-2">
            🌙 Quiz do Sono do Bebê
          </CardTitle>
          <p className="text-blue-100 text-sm sm:text-base">
            Faça este quiz rápido e descubra o que está atrapalhando as noites da sua família
          </p>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 p-4 sm:p-6 md:p-8">
          <div className="flex flex-col flex-1 text-center space-y-4 sm:space-y-6 h-full">
            <div className="flex-1 bg-gradient-to-r from-yellow-50 to-orange-50 p-4 sm:p-6 rounded-lg border border-yellow-200">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">O que você vai descobrir:</h3>
              <div className="text-left space-y-2 text-gray-700 text-sm sm:text-base">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✅</span>
                  <span>Por que seu bebê tem dificuldade para dormir</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✅</span>
                  <span>Qual método funciona melhor para sua situação</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✅</span>
                  <span>Como criar uma rotina noturna eficaz</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✅</span>
                  <span>Como ajudar seu bebê a dormir melhor</span>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 sm:py-4 px-4 sm:px-8 text-base sm:text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              COMEÇAR O QUIZ AGORA!
            </Button>

            <p className="text-xs sm:text-sm text-gray-500">
              ⏱️ Apenas 2 minutos • 100% gratuito • Resultados instantâneos
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="text-center pt-4">
        <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-base">Método que ajudou mais de 500 famílias a terem noites tranquilas</p>
        <div className="flex justify-center items-center space-x-1 sm:space-x-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
          ))}
          <span className="ml-2 text-gray-600 font-medium text-xs sm:text-base">4.9/5 (247 avaliações)</span>
        </div>
      </div>
    </div>
  );
};

export default QuizLanding;
