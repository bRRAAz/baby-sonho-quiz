
import React, { useState, useEffect } from 'react';
import { Moon, Heart, Coffee, Smile } from 'lucide-react';

const MiniSimulation = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const scenarios = [
    {
      icon: Moon,
      title: "Suas noites em 7 dias:",
      description: "Seu bebê vai dormir tranquilamente às 20h",
      gif: "😴",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Você vai sentir:",
      description: "Paz, tranquilidade e confiança como mãe/pai",
      gif: "😌",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Coffee,
      title: "Suas manhãs serão:",
      description: "Acordar descansada, com energia para o dia",
      gif: "☀️",
      color: "from-orange-500 to-yellow-600"
    },
    {
      icon: Smile,
      title: "Seu relacionamento:",
      description: "Tempo de qualidade com parceiro e família",
      gif: "💕",
      color: "from-green-500 to-emerald-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % scenarios.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentScenario = scenarios[currentStep];
  const IconComponent = currentScenario.icon;

  return (
    <div className="bg-gradient-to-b from-teal-50 to-cyan-50 p-4 rounded-xl border-2 border-teal-200 shadow-lg">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-teal-800 mb-2">
          ✨ Como serão suas noites daqui a 7 dias
        </h2>
        <p className="text-sm text-teal-600">
          Veja como sua vida vai mudar:
        </p>
      </div>

      {/* Simulação Animada */}
      <div className="relative bg-white rounded-lg p-6 border-2 border-teal-100 shadow-inner min-h-[160px] flex flex-col justify-center">
        <div className="text-center">
          {/* Ícone e Emoji grandes */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className={`w-16 h-16 bg-gradient-to-r ${currentScenario.color} rounded-full flex items-center justify-center shadow-lg`}>
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <div className="text-6xl animate-pulse">
              {currentScenario.gif}
            </div>
          </div>

          {/* Texto da simulação */}
          <h3 className="text-lg font-bold text-gray-800 mb-2 animate-fade-in">
            {currentScenario.title}
          </h3>
          <p className="text-sm text-gray-600 animate-fade-in">
            {currentScenario.description}
          </p>
        </div>

        {/* Indicadores de progresso */}
        <div className="flex justify-center gap-2 mt-6">
          {scenarios.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? 'bg-teal-500 w-6' 
                  : 'bg-teal-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Frases motivacionais rotativas */}
      <div className="mt-4 text-center bg-gradient-to-r from-teal-100 to-cyan-100 p-3 rounded-lg border border-teal-200">
        <p className="text-sm font-semibold text-teal-700">
          🌟 Imagine só: noites inteiras de sono, energia renovada e tempo para você!
        </p>
      </div>
    </div>
  );
};

export default MiniSimulation;
