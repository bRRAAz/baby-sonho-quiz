
import React from 'react';
import { Moon, Heart, Clock, Brain, Star, Baby, Shield, CheckCircle } from 'lucide-react';

const BenefitsList = () => {
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

  return (
    <div className="bg-green-50 p-2 rounded-2xl border-2 border-green-300 shadow-md">
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-3 shadow-lg">
          <CheckCircle className="h-6 w-6 text-white" />
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
                <p className="text-xs text-gray-600">{benefit.description}</p>
              </div>

              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-emerald-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitsList;
