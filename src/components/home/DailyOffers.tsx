"use client";

import { useState, useEffect } from "react";
import ProductCard from "../common/ProductCard";
import { differenceInSeconds } from "date-fns";

// Mock offer end time (24 hours from now)
const offerEndTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

const OFFER_PRODUCT = {
  id: "offer-1",
  name: "Soundbar Premium X-Pro Dolby Atmos 7.1",
  slug: "soundbar-premium-x-pro",
  price: 3499.00,
  discount: 30,
  image: "https://images.unsplash.com/photo-1545454675-a6a61fa2515b?q=80&w=800&auto=format&fit=crop",
  rating: 5,
  reviews: 312,
  isNew: true,
};

export default function DailyOffers() {
  const [timeLeft, setTimeLeft] = useState(differenceInSeconds(offerEndTime, new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(differenceInSeconds(offerEndTime, new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    if (seconds < 0) return { h: "00", m: "00", s: "00" };
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
      h: h.toString().padStart(2, "0"),
      m: m.toString().padStart(2, "0"),
      s: s.toString().padStart(2, "0"),
    };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <section className="container py-16">
      <div className="relative overflow-hidden rounded-3xl bg-secondary p-8 md:p-12">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        
        <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Offer Content */}
          <div className="flex flex-col items-start">
            <span className="mb-4 inline-block rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-destructive">
              Oferta do Dia
            </span>
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
              Oferta Flash Imperdível
            </h2>
            <p className="mb-8 max-w-md text-lg text-muted-foreground">
              Aproveite esta oportunidade única e leve nosso super produto com um desconto exclusivo até o contador zerar.
            </p>
            
            {/* Countdown */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-background text-2xl font-black text-primary shadow-sm">
                  {h}
                </div>
                <span className="mt-2 text-xs font-bold uppercase text-muted-foreground">Horas</span>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-background text-2xl font-black text-primary shadow-sm">
                  {m}
                </div>
                <span className="mt-2 text-xs font-bold uppercase text-muted-foreground">Minutos</span>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-background text-2xl font-black text-primary shadow-sm">
                  {s}
                </div>
                <span className="mt-2 text-xs font-bold uppercase text-muted-foreground">Segundos</span>
              </div>
            </div>
            
            <button className="h-12 rounded-full border border-transparent bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              Aproveitar Oferta
            </button>
          </div>

          {/* Offer Product */}
          <div className="mx-auto w-full max-w-sm lg:ml-auto">
            <ProductCard product={OFFER_PRODUCT} />
          </div>
        </div>
      </div>
    </section>
  );
}
