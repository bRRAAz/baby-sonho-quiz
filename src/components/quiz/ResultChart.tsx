
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface ResultChartProps {
  score: number;
}

const ResultChart = ({ score }: ResultChartProps) => {
  // Criando dados para a curva de risco
  const chartData = [
    { nivel: 'Baixo', risco: 5, label: 'Zero Risco' },
    { nivel: 'Médio', risco: 35, label: 'Risco Baixo' },
    { nivel: 'Alto', risco: 75, label: 'Risco Médio' },
    { nivel: 'Altíssimo', risco: 95, label: 'Risco de Crise' }
  ];

  const chartConfig = {
    risco: {
      label: "Nível de Risco",
      color: "#ef4444"
    }
  };

  // Função para determinar a posição do indicador baseado no score
  const getIndicatorPosition = (score: number) => {
    if (score <= 25) return 'Baixo';
    if (score <= 50) return 'Médio';
    if (score <= 75) return 'Alto';
    return 'Altíssimo';
  };

  const currentLevel = getIndicatorPosition(score);

  return (
    <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border-l-4 border-red-400">
      <h3 className="text-lg font-bold text-red-600 mb-4 text-center">
        📊 Análise do Sono do seu Bebê
      </h3>
      
      <div className="flex flex-col items-center">
        {/* Alerta de Risco */}
        <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4 w-full">
          <div className="flex items-center mb-2">
            <span className="text-red-600 font-bold text-sm">⚠️ Seu risco de enfrentar novas crises está em {score} de 100.</span>
          </div>
          <p className="text-xs text-red-700 mb-2">
            Seu corpo já está avisando: algo não está certo.
          </p>
          <p className="text-xs text-red-600">
            🔴 <strong>Não é normal.</strong>
          </p>
          <p className="text-xs text-red-600 mb-2">
            Coceiras, ardência ou desconfortos que vão e voltam não são normais — são sinais de alerta.
          </p>
          <p className="text-xs text-red-500">
            ❌ Esperar "ver no que vai dar" só aumenta o sofrimento.
          </p>
        </div>

        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-[4/3] max-h-[250px] w-full"
        >
          <AreaChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 40,
            }}
          >
            <defs>
              <linearGradient id="riskGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="30%" stopColor="#eab308" stopOpacity={0.8} />
                <stop offset="70%" stopColor="#f97316" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="riskStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="30%" stopColor="#ca8a04" />
                <stop offset="70%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="nivel"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#374151' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#374151' }}
              domain={[0, 100]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
              formatter={(value, name) => [`${value}%`, 'Nível de Risco']}
            />
            <Area 
              type="monotone"
              dataKey="risco" 
              stroke="url(#riskStroke)"
              strokeWidth={3}
              fill="url(#riskGradient)"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ChartContainer>

        {/* Indicador de posição atual */}
        <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 mt-4 w-full text-center">
          <p className="text-yellow-800 font-bold text-sm mb-1">
            📍 Nível Médio: Seu corpo sofre com a situação atual
          </p>
          <div className="flex justify-center items-center">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              Risco: {score}%
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            <strong className="text-red-600">Risco de interferência no sono:</strong>
          </p>
          <p className="text-3xl font-bold text-red-600 mb-2">{score}%</p>
          <p className="text-sm text-gray-600">
            Seu bebê está enfrentando dificuldades significativas para dormir
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultChart;
