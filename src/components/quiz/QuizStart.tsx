
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface QuizStartProps {
  onStartQuiz: () => void;
}

const QuizStart = ({ onStartQuiz }: QuizStartProps) => {
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
              onClick={onStartQuiz}
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

export default QuizStart;
