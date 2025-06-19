
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine, ReferenceDot } from 'recharts';

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

  // Encontrar a posição X aproximada baseada no score
  const getXPosition = (score: number) => {
    if (score <= 25) return 0;
    if (score <= 50) return 1;
    if (score <= 75) return 2;
    return 3;
  };

  return (
    <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border-l-4 border-red-400">
      <h3 className="text-lg font-bold text-red-600 mb-4 text-center">
        📊 Análise do Sono do seu Bebê
      </h3>
      
      <div className="flex flex-col items-center">
        {/* Alerta de Risco - Versão Reduzida */}
        <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4 w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="text-red-600 font-bold text-sm">⚠️ Risco: {score}/100</span>
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {score}%
            </div>
          </div>
          <p className="text-xs text-red-700">
            🔴 <strong>Situação crítica:</strong> Seu bebê precisa de ajuda para dormir melhor.
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
            {/* Linha de referência vertical para marcar o score */}
            <ReferenceLine 
              x={getXPosition(score)} 
              stroke="#dc2626" 
              strokeWidth={3}
              strokeDasharray="5 5"
            />
            {/* Ponto de referência para marcar exatamente o score */}
            <ReferenceDot 
              x={getXPosition(score)} 
              y={score} 
              r={8} 
              fill="#dc2626" 
              stroke="#ffffff"
              strokeWidth={3}
            />
          </AreaChart>
        </ChartContainer>

        {/* Indicador de posição atual - Versão Simplificada */}
        <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-2 mt-3 w-full text-center">
          <p className="text-yellow-800 font-bold text-sm">
            📍 Seu bebê está no nível: <span className="text-red-600">{currentLevel}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultChart;
