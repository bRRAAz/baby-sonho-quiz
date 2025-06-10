
import React, { useState, useEffect } from 'react';
import QuizStart from './quiz/QuizStart';
import QuizQuestion from './quiz/QuizQuestion';
import QuizLoading from './quiz/QuizLoading';
import QuizResult from './quiz/QuizResult';

const QuizLanding = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [resultScore, setResultScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Seu bebê demora mais de 30 minutos para dormir?",
      options: [
        "Sim, é uma luta toda noite",
        "Às vezes demora bastante",
        "Raramente demora tanto",
        "Não, dorme rapidinho"
      ]
    },
    {
      id: 2,
      question: "Você acorda mais de 2 vezes por noite?",
      options: [
        "Sim, acordo várias vezes",
        "Acordo umas 2-3 vezes",
        "Acordo apenas 1 vez",
        "Durmo a noite toda"
      ]
    },
    {
      id: 3,
      question: "Você já tentou de tudo (banho, música, colo, etc.) e nada funciona?",
      options: [
        "Sim, tentei tudo e nada resolve",
        "Algumas coisas funcionam às vezes",
        "Tenho algumas estratégias que funcionam",
        "Encontrei o que funciona para meu bebê"
      ]
    },
    {
      id: 4,
      question: "Você se sente cansado(a) o tempo todo?",
      options: [
        "Sim, estou exausto(a)",
        "Sim, bem cansado(a)",
        "Um pouco cansado(a)",
        "Me sinto bem disposto(a)"
      ]
    },
    {
      id: 5,
      question: "Dormir virou uma batalha toda noite?",
      options: [
        "Sim, é uma guerra todas as noites",
        "Na maioria das noites é difícil",
        "Algumas noites são complicadas",
        "Geralmente é tranquilo"
      ]
    }
  ];

  // Add the script for dotlottie player when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Show loading instead of going directly to results
      setShowLoading(true);
      
      // Generate random score and show results after 3 seconds
      setTimeout(() => {
        const randomScore = Math.floor(Math.random() * (100 - 85 + 1)) + 85;
        setResultScore(randomScore);
        setShowLoading(false);
        setShowResult(true);
      }, 3000);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setShowLoading(false);
    setShowQuiz(false);
    setResultScore(0);
  };

  const startQuiz = () => {
    setShowQuiz(true);
  };

  // Loading screen
  if (showLoading) {
    return <QuizLoading />;
  }

  if (showResult) {
    return <QuizResult score={resultScore} onReset={resetQuiz} />;
  }

  if (showQuiz) {
    return (
      <QuizQuestion
        question={questions[currentQuestion]}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  return <QuizStart onStartQuiz={startQuiz} />;
};

export default QuizLanding;
