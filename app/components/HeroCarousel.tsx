"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="mb-8 relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide flex-[0_0_100%]">
            <img 
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&h=400&fit=crop" 
              alt="Shopping deals" 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="embla__slide flex-[0_0_100%]">
            <img 
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1200&h=400&fit=crop" 
              alt="Gaming setup" 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="embla__slide flex-[0_0_100%]">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop" 
              alt="Package delivery" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-gray-800 p-2 rounded-full shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
} 