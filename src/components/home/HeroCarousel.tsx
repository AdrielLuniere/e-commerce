"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Elevando Sua \nExperiência Digital",
    subtitle: "Nova Coleção 2024",
    description: "Descubra uma curadoria exclusiva de produtos tecnológicos e minimalistas para o seu dia a dia.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    cta1: "Comprar Agora",
    cta2: "Saber Mais"
  },
  {
    id: 2,
    title: "Minimalismo em \nCada Detalhe",
    subtitle: "Design Premium",
    description: "Acessórios que combinam performance e estética para transformar o seu setup.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    cta1: "Ver Coleção",
    cta2: "Explorar"
  },
  {
    id: 3,
    title: "Som Imersivo \nSem Distrações",
    subtitle: "Áudio High-End",
    description: "Fones com cancelamento ativo de ruído para você focar apenas no que importa.",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop",
    cta1: "Ofertas de Áudio",
    cta2: "Lançamentos"
  }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide) => (
            <div key={slide.id} className="relative min-w-full flex-none">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
              </div>

              <div className="container relative z-10 flex min-h-[500px] flex-col justify-center py-24 md:min-h-[600px] md:py-32">
                <span className="mb-4 inline-block w-fit rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {slide.subtitle}
                </span>
                <h1 className="mb-6 whitespace-pre-line text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>
                <p className="mb-10 max-w-2xl text-lg text-gray-200 sm:text-xl">
                  {slide.description}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button className="h-12 w-fit rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 active:scale-95">
                    {slide.cta1}
                  </button>
                  <button className="h-12 w-fit rounded-full border border-white/30 bg-white/10 px-8 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95">
                    {slide.cta2}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-all hover:bg-primary hover:text-white md:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-all hover:bg-primary hover:text-white md:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 transition-all ${
              index === selectedIndex ? "w-8 bg-primary rounded-full" : "w-2 bg-white/50 rounded-full hover:bg-white/80"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
