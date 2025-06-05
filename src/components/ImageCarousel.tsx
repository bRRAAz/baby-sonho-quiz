
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Placeholder images - you can replace these with actual WhatsApp screenshot URLs
  const images = [
    "https://images.unsplash.com/photo-1611095790444-1dfa35e8b8ba?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1611095790463-b73d1b1dc2d9?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1611095790451-d9df3ddce9dd?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1611095790463-60b22a0c9c46?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1611095790451-9b654a36c46a?w=400&h=300&fit=crop&crop=center"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <Card className="bg-white shadow-lg border-0">
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-center text-gray-800 mb-4">
          📱 Veja o que as mães estão falando
        </h3>
        
        <div className="relative">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <div className="relative h-64 sm:h-80">
              <img
                src={images[currentImage]}
                alt={`Screenshot ${currentImage + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-3">
          Centenas de mães já estão dormindo melhor com o Método Noite de Paz
        </p>
      </CardContent>
    </Card>
  );
};

export default ImageCarousel;
