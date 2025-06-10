
import React from 'react';
import { Button } from "@/components/ui/button";
import { Gift } from 'lucide-react';

const ProductOffer = () => {
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

  return (
    <div className="bg-gradient-to-b from-green-50 to-yellow-50 p-4 sm:p-6 rounded-xl border-4 border-green-300 shadow-lg">
      {/* Cabeçalho da Oferta Completa */}
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
          🎯 OFERTA COMPLETA
        </h2>
        <p className="text-green-700 text-sm font-semibold">
          Método + Todos os Bônus por apenas:
        </p>
      </div>

      {/* Produto Principal */}
      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border-2 border-green-400 mb-4">
        <div className="text-center">
          <h3 className="text-lg font-bold text-green-800 mb-2">📚 Método Noite de Paz</h3>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl font-bold text-green-600">R$ 197,00</span>
            <span className="text-lg text-gray-500 line-through">R$ 497,00</span>
          </div>
          <p className="text-sm text-green-600 font-semibold">60% OFF - Oferta limitada!</p>
        </div>
      </div>

      {/* Linha conectora */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
        <span className="mx-3 text-green-700 font-bold text-sm bg-yellow-200 px-3 py-1 rounded-full border-2 border-green-400">
          MAIS
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
      </div>

      {/* Bônus Inclusos */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border-2 border-yellow-400">
        <div className="text-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-orange-700 mb-2 flex items-center justify-center">
            <Gift className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
            🎁 Bônus Inclusos GRÁTIS!
          </h3>
          <p className="text-sm font-semibold text-gray-800 mb-4">
            Que você recebe junto com o método:
          </p>
        </div>

        <div className="space-y-3">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white/70 p-3 rounded-lg border border-yellow-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-800 text-sm">{bonus.title}</h4>
                <div className="text-right">
                  <span className="text-red-500 line-through text-sm">{bonus.originalPrice}</span>
                  <span className="block text-green-600 font-bold text-sm">INCLUÍDO!</span>
                </div>
              </div>
              <p className="text-xs text-gray-600">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Valor Total */}
      <div className="mt-4 text-center bg-white/80 p-4 rounded-lg border-2 border-green-400">
        <p className="text-sm text-gray-600 mb-1">Valor se comprado separadamente:</p>
        <p className="text-lg line-through text-red-500 mb-1">R$ 905,00</p>
        <p className="text-sm font-bold text-green-700 mb-3">VOCÊ PAGA APENAS:</p>
        <div className="text-4xl font-bold text-green-600 mb-2">R$ 197,00</div>
        <p className="text-sm text-green-600 font-semibold">Economia de R$ 708,00!</p>
      </div>

      <Button
        className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 sm:py-6 px-4 sm:px-8 text-base sm:text-lg md:text-xl shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse-scale"
        onClick={() => window.open('#', '_blank')}
      >
        🎁 QUERO MEU BEBÊ DORMINDO JÁ!
      </Button>
    </div>
  );
};

export default ProductOffer;
