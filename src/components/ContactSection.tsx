
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, ChevronDown, ChevronUp, Clock, Shield, Heart, Brain } from 'lucide-react';

const ContactSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "O método funciona para bebês de quantos meses?",
      answer: "O Método Noite de Paz funciona para bebês de 4 meses a 3 anos de idade. Cada faixa etária tem suas particularidades e o método se adapta a elas."
    },
    {
      question: "Em quanto tempo vou ver resultados?",
      answer: "A maioria das famílias vê melhorias significativas em 3-7 dias. Alguns bebês respondem ainda mais rápido, já na primeira noite!"
    },
    {
      question: "O método deixa o bebê chorar?",
      answer: "Não! O Método Noite de Paz é completamente gentil e respeitoso. Não utilizamos técnicas que deixam o bebê chorar sozinho."
    },
    {
      question: "E se eu não conseguir aplicar o método?",
      answer: "Você terá acesso ao nosso grupo VIP com suporte 24h de especialistas em sono infantil. Além disso, oferecemos garantia de 7 dias."
    },
    {
      question: "O método funciona para bebês que só dormem no colo?",
      answer: "Sim! Temos técnicas específicas para bebês que criaram dependências como colo, peito ou embalo. O método ensina a transição gradual e gentil."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:contato@noitedepaz.com.br', '_blank');
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-6 space-y-4">
      {/* Validação Científica como Card Separado */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-t-lg p-4">
          <CardTitle className="text-lg font-bold text-center flex items-center justify-center gap-2">
            <Brain className="h-5 w-5" />
            🧠 Validação Científica
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>Instituto do Sono - Pesquisa 2023:</strong> Estudos comprovam que bebês possuem "janelas do sono" naturais que, quando respeitadas, aumentam em 87% a qualidade do descanso.
          </p>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-700 font-medium">
              🧠 <strong>Neuro-Ritmo do Sono:</strong> Nosso método exclusivo mapeia e sincroniza essas janelas naturais para resultados mais rápidos e duradouros.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contato */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-t-lg p-4">
          <CardTitle className="text-lg font-bold text-center">
            📞 Precisa de Ajuda?
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {/* Email Button */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center p-3 bg-purple-50 rounded-lg mb-2 w-full">
              <Mail className="h-5 w-5 text-purple-600 mb-1" />
              <p className="font-semibold text-purple-800 text-center">Email</p>
              <p className="text-sm text-gray-600 text-center">contato@noitedepaz.com.br</p>
            </div>
            <Button 
              onClick={handleEmailClick}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              Enviar Email
            </Button>
          </div>

          {/* WhatsApp Button */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center p-3 bg-green-50 rounded-lg mb-2 w-full">
              <MessageCircle className="h-5 w-5 text-green-600 mb-1" />
              <p className="font-semibold text-green-800 text-center">WhatsApp</p>
              <p className="text-sm text-gray-600 text-center">(11) 99999-9999</p>
            </div>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Chamar no WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Garantias e Segurança - ALTERADO PARA 7 DIAS */}
      <Card className="bg-white shadow-lg border-0">
        <CardContent className="p-4">
          <h3 className="text-lg font-bold text-center text-gray-800 mb-4">
            🛡️ Sua Compra Está Protegida
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-semibold text-sm text-gray-800">Garantia de 7 dias</p>
                <p className="text-xs text-gray-600">100% do seu dinheiro de volta se não funcionar</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-red-500" />
              <div>
                <p className="font-semibold text-sm text-gray-800">Método aprovado por especialistas</p>
                <p className="text-xs text-gray-600">Desenvolvido por consultoras em sono infantil</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold text-sm text-gray-800">Suporte completo</p>
                <p className="text-xs text-gray-600">Grupo VIP com especialistas 24h</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-t-lg p-4">
          <CardTitle className="text-lg font-bold text-center">
            ❓ Perguntas Frequentes
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-3 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-800 text-sm">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </button>
              {openFaq === index && (
                <div className="p-3 pt-0 border-t border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;
