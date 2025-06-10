
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Question {
  id: number;
  question: string;
  options: string[];
}

interface QuizQuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
}

const QuizQuestion = ({ question, currentQuestion, totalQuestions, onAnswer }: QuizQuestionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-start p-3 sm:p-4 flex-col">
      <img src="/assets/logo_nenem.png" className="w-24" />
      <Card className="w-full max-h-600px max-w-xl mx-auto shadow-xl border-0 bg-white flex flex-col">
        <CardHeader className="text-center bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-t-lg p-4 sm:p-6 flex-shrink-0">
          <CardTitle className="text-lg sm:text-xl font-bold mb-2">
            🌙 Quiz do Sono do Bebê
          </CardTitle>
          <p className="text-blue-100 text-xs sm:text-sm">
            Descubra o que está atrapalhando as noites da sua família
          </p>
          <div className="mt-3 sm:mt-4 bg-white/20 rounded-full h-2">
            <div
              className="bg-yellow-300 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-center">
          <div className="flex-1 flex flex-col pt-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-6 sm:mb-4 leading-relaxed text-center">
              {question.question}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left p-4 sm:p-5 h-auto hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 font-medium text-sm sm:text-base min-h-[3.5rem] sm:min-h-[4rem] flex items-center"
                  onClick={() => onAnswer(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizQuestion;
