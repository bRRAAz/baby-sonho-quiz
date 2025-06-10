
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface ResultChartProps {
  score: number;
}

const ResultChart = ({ score }: ResultChartProps) => {
  const chartData = [
    { 
      category: 'Dificuldades\nde Sono', 
      value: score,
      fill: '#ef4444'
    },
    { 
      category: 'Sono\nSaudável', 
      value: 100 - score,
      fill: '#22c55e'
    }
  ];

  const chartConfig = {
    value: {
      label: "Porcentagem",
      color: "#2563eb"
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-4 rounded-lg border-l-4 border-red-400">
      <h3 className="text-lg font-bold text-red-600 mb-4 text-center">
        📊 Análise do Sono do seu Bebê
      </h3>
      
      <div className="flex flex-col items-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-[4/3] max-h-[300px] w-full"
        >
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis 
              dataKey="category"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#374151' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#374151' }}
              domain={[0, 100]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
              formatter={(value) => [`${value}%`, 'Porcentagem']}
            />
            <Bar 
              dataKey="value" 
              fill="#8884d8"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
        
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
