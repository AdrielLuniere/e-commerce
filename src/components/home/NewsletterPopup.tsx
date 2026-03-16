"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    // Show popup after 5 seconds if not seen before
    const hasSeenPopup = localStorage.getItem("newsletter_seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("newsletter_seen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        closePopup();
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-background shadow-2xl animate-in zoom-in-95 duration-300"
      >
        <button 
          onClick={closePopup}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-muted-foreground transition-colors hover:bg-black/20 hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="hidden w-1/3 bg-primary md:block md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=400&auto=format&fit=crop" 
              alt="Newsletter" 
              className="h-full w-full object-cover opacity-80 mix-blend-overlay"
            />
          </div>
          
          <div className="p-8 md:w-3/5">
            <h3 className="mb-2 text-2xl font-black tracking-tight text-primary">Ganhe 15% OFF</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Inscreva-se na nossa newsletter e receba 15% de desconto na sua primeira compra, além de ofertas exclusivas.
            </p>

            {status === "success" ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center text-green-800">
                <p className="font-bold cursor-default">✔️ Cupom enviado para o seu e-mail!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border bg-muted/50 px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="h-12 w-full rounded-xl bg-primary font-bold text-primary-foreground transition-all hover:bg-primary/90 active:scale-95 disabled:opacity-70"
                >
                  {status === "loading" ? "Processando..." : "Quero meu desconto"}
                </button>
                <button 
                  type="button" 
                  onClick={closePopup}
                  className="mt-2 text-xs text-muted-foreground underline hover:text-foreground"
                >
                  Não, obrigado. Prefiro pagar mais caro.
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
