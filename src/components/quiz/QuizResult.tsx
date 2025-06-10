
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, CheckCircle, Heart } from 'lucide-react';
import VideoPlayer from '../videoPlayer';
import CountdownTimer from '../CountdownTimer';
import ImageCarousel from '../ImageCarousel';
import ContactSection from '../ContactSection';
import ResultChart from './ResultChart';
import BenefitsList from './BenefitsList';
import ProductOffer from './ProductOffer';

interface QuizResultProps {
  score: number;
  onReset: () => void;
}

const QuizResult = ({ score, onReset }: QuizResultProps) => {
  const targetDate = new Date();
  targetDate.setMinutes(targetDate.getMinutes() + 15);

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
          {/* Gráfico do Resultado */}
          <ResultChart score={score} />

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
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 sm:py-6 px-4 sm:px-8 text-base sm:text-lg md:text-xl shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse-scale"
            onClick={() => window.open('#', '_blank')}
          >
            🎁 QUERO MEU BEBÊ DORMINDO JÁ!
          </Button>

          <div className="mb-3 text-center">
            <p className="text-lg text-red-600 font-semibold mb-1">⚡ OFERTA POR TEMPO LIMITADO</p>
            <CountdownTimer targetDate={targetDate} />
          </div>

          {/* Container unificado para produto + bônus */}
          <ProductOffer />

          <BenefitsList />

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
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 sm:py-6 px-4 sm:px-8 text-base sm:text-lg md:text-xl shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse-scale"
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
              onClick={onReset}
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
};

export default QuizResult;
