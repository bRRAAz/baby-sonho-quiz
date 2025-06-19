
import React from 'react';
import { Clock, Zap, CheckCircle, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: "Acesse o método",
      description: "Receba o material completo em seu email",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Aplique as técnicas",
      description: "Siga o passo a passo gentil e respeitoso",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Clock,
      title: "Sinta a diferença a partir de 7 dias",
      description: "Noites mais tranquilas começam rapidamente",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Star,
      title: "Ganhe seu tempo novamente",
      description: "Volte a ter energia e qualidade de vida",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-purple-50 p-4 rounded-xl border-2 border-indigo-200 shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-indigo-800 mb-2">
          🚀 Como funciona na prática
        </h2>
        <p className="text-sm text-indigo-600">
          Seu caminho para noites tranquilas em 4 passos simples
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div key={index} className="relative">
              <div className="flex items-center gap-4 bg-white/80 p-4 rounded-lg border border-indigo-100 hover:bg-white transition-all duration-200">
                {/* Número do passo */}
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>

                {/* Ícone */}
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center shadow-md`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Seta conectora (não mostrar na última etapa) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-2">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-indigo-400"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-lg border border-indigo-200">
        <p className="text-sm font-semibold text-indigo-700">
          ⏰ Em apenas 7 dias você terá a vida que sempre sonhou!
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
