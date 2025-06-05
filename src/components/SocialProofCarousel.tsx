
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from 'lucide-react';

const SocialProofCarousel = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face",
      text: "Em 5 dias minha filha já estava dormindo a noite toda! O método é incrível e muito gentil.",
      rating: 5,
      baby: "Sofia, 8 meses"
    },
    {
      name: "Ana Costa",
      location: "Rio de Janeiro, RJ", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face",
      text: "Depois de meses sem dormir, finalmente encontrei a solução. Não acreditava que seria tão simples!",
      rating: 5,
      baby: "Pedro, 1 ano"
    },
    {
      name: "Juliana Santos",
      location: "Belo Horizonte, MG",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face",
      text: "O método salvou nossa família! Agora todos dormimos bem e acordamos descansados.",
      rating: 5,
      baby: "Lucas, 6 meses"
    },
    {
      name: "Fernanda Lima",
      location: "Brasília, DF",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face",
      text: "Tentei tudo antes de conhecer o Noite de Paz. Em uma semana tudo mudou completamente!",
      rating: 5,
      baby: "Isabela, 10 meses"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
      <h3 className="text-lg font-bold text-blue-800 mb-4 text-center">
        ⭐ O que dizem as mães que já transformaram suas noites
      </h3>
      
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-sm bg-white/80">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600">{testimonial.location}</p>
                      <p className="text-xs text-blue-600 font-medium">{testimonial.baby}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-4 w-4 text-blue-300 absolute -top-1 -left-1" />
                    <p className="text-sm text-gray-700 italic pl-4 mb-3">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      <div className="text-center mt-3">
        <p className="text-xs text-blue-600 font-semibold">
          Mais de 500 famílias já transformaram suas noites ⭐
        </p>
      </div>
    </div>
  );
};

export default SocialProofCarousel;
