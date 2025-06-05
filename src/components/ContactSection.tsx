
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, ChevronDown, ChevronUp, Clock, Shield, Heart } from 'lucide-react';

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
      answer: "Você terá acesso ao nosso grupo VIP com suporte 24h de especialistas em sono infantil. Além disso, oferecemos garantia de 30 dias."
    },
    {
      question: "O método funciona para bebês que só dormem no colo?",
      answer: "Sim! Temos técnicas específicas para bebês que criaram dependências como colo, peito ou embalo. O método ensina a transição gradual e gentil."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-6 space-y-4">
      {/* Contato */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-t-lg p-4">
          <CardTitle className="text-lg font-bold text-center">
            📞 Precisa de Ajuda?
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
            <Mail className="h-5 w-5 text-purple-600" />
            <div>
              <p className="font-semibold text-purple-800">Email</p>
              <p className="text-sm text-gray-600">contato@noitedepaz.com.br</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <MessageCircle className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-semibold text-green-800">WhatsApp</p>
              <p className="text-sm text-gray-600">(11) 99999-9999</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <Clock className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-semibold text-blue-800">Horário de Atendimento</p>
              <p className="text-sm text-gray-600">Segunda a Sexta: 9h às 18h</p>
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

      {/* Garantias e Segurança */}
      <Card className="bg-white shadow-lg border-0">
        <CardContent className="p-4">
          <h3 className="text-lg font-bold text-center text-gray-800 mb-4">
            🛡️ Sua Compra Está Protegida
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-semibold text-sm text-gray-800">Garantia de 30 dias</p>
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
    </div>
  );
};

export default ContactSection;
