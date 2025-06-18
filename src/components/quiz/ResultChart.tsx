
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine, ReferenceDot, LabelList } from 'recharts';

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

  // Calcular a posição X mais precisa baseada no score (0-3 sendo os índices dos níveis)
  const getXPosition = (score: number) => {
    // Mapear o score (0-100) para a posição no gráfico (0-3)
    return (score / 100) * 3;
  };

  // Calcular a altura Y baseada na interpolação da curva
  const getYPosition = (score: number) => {
    const xPos = getXPosition(score);
    
    // Interpolação linear entre os pontos da curva
    if (xPos <= 1) {
      // Entre Baixo (5) e Médio (35)
      const progress = xPos;
      return 5 + (35 - 5) * progress;
    } else if (xPos <= 2) {
      // Entre Médio (35) e Alto (75)
      const progress = xPos - 1;
      return 35 + (75 - 35) * progress;
    } else {
      // Entre Alto (75) e Altíssimo (95)
      const progress = xPos - 2;
      return 75 + (95 - 75) * progress;
    }
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

        <div className="relative">
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
                strokeWidth={2}
                strokeDasharray="3 3"
              />
              {/* Ponto de referência sempre visível na posição exata do score */}
              <ReferenceDot 
                x={getXPosition(score)} 
                y={getYPosition(score)} 
                r={10} 
                fill="#dc2626" 
                stroke="#ffffff"
                strokeWidth={3}
                label={{ value: `${score}%`, position: 'top', fill: '#dc2626', fontWeight: 'bold', fontSize: 12 }}
              />
            </AreaChart>
          </ChartContainer>
          
          {/* Label com porcentagem posicionado acima do gráfico */}
          <div 
            className="absolute bg-red-600 text-white px-2 py-1 rounded text-xs font-bold shadow-lg"
            style={{
              top: '10px',
              left: `${(getXPosition(score) / 3) * 100}%`,
              transform: 'translateX(-50%)'
            }}
          >
            {score}%
          </div>
        </div>

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
