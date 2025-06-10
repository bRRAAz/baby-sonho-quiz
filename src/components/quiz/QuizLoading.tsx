
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const QuizLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-3 sm:p-4 flex-col">
      <img src="./assets/logo_nenem.png" className="w-24 mb-8" />
      <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div 
              dangerouslySetInnerHTML={{
                __html: `<dotlottie-player 
                  src="https://lottie.host/3782b314-73dd-4af5-b2de-6a41aba55921/5vAxTlD93H.lottie" 
                  background="transparent" 
                  speed="1" 
                  style="width: 200px; height: 200px;"
                  loop 
                  autoplay>
                </dotlottie-player>`
              }}
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Analisando suas respostas...
          </h3>
          <p className="text-gray-600 mb-4">
            Preparando seu resultado personalizado
          </p>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-700">
              🔍 Identificando padrões de sono<br/>
              🧠 Calculando estratégias personalizadas<br/>
              ✨ Gerando seu plano de ação
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizLoading;
