"use client";

import { useState } from "react";
import { CreditCard, QrCode } from "lucide-react";

export default function PaymentGateway({ onValidation }: { onValidation: (isValid: boolean) => void }) {
  const [method, setMethod] = useState<"credit" | "pix">("credit");
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "number") {
      const v = value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim().slice(0, 19);
      setCard({ ...card, [name]: v });
    } else if (name === "expiry") {
      const v = value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "$1/$2").slice(0, 5);
      setCard({ ...card, [name]: v });
    } else if (name === "cvc") {
      const v = value.replace(/\D/g, "").slice(0, 4);
      setCard({ ...card, [name]: v });
    } else {
      setCard({ ...card, [name]: value });
    }

    // Basic validation mock
    onValidation(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <button
          onClick={() => { setMethod("credit"); onValidation(false); }}
          className={`flex-1 rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition-all hover:bg-muted ${
            method === "credit" ? "border-primary bg-primary/5 text-primary" : "border-transparent bg-muted/50 text-muted-foreground"
          }`}
        >
          <CreditCard className="h-6 w-6" />
          <span className="font-bold">Cartão de Crédito</span>
        </button>
        <button
          onClick={() => { setMethod("pix"); onValidation(true); }}
          className={`flex-1 rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition-all hover:bg-muted ${
            method === "pix" ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20" : "border-transparent bg-muted/50 text-muted-foreground"
          }`}
        >
          <QrCode className="h-6 w-6" />
          <span className="font-bold">PIX</span>
        </button>
      </div>

      {method === "credit" && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
          {/* Card Visualizer */}
          <div className="mx-auto h-48 w-full max-w-sm rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 p-6 text-white shadow-xl perspective-1000">
            <div className="flex justify-between items-start">
              <CreditCard className="h-8 w-8 text-white/80" />
              <span className="text-xl font-black italic">VISA</span>
            </div>
            <div className="mt-8">
              <div className="mb-2 text-xl font-black tracking-widest font-mono h-7">
                {card.number || "•••• •••• •••• ••••"}
              </div>
              <div className="flex justify-between text-sm uppercase tracking-wider text-white/80">
                <span className="truncate max-w-[200px]">{card.name || "NOME DO TITULAR"}</span>
                <span>{card.expiry || "MM/AA"}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <label className="mb-1 block text-sm font-bold text-muted-foreground">Número do Cartão</label>
            <input 
              type="text"
              name="number"
              value={card.number}
              onChange={handleCardChange}
              placeholder="0000 0000 0000 0000"
              className="h-12 w-full rounded-xl border bg-background px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-mono"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-bold text-muted-foreground">Nome Impresso no Cartão</label>
            <input 
              type="text"
              name="name"
              value={card.name}
              onChange={handleCardChange}
              placeholder="Ex: ADRIEL LUNIERE"
              className="h-12 w-full rounded-xl border bg-background px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary uppercase"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-bold text-muted-foreground">Validade</label>
              <input 
                type="text"
                name="expiry"
                value={card.expiry}
                onChange={handleCardChange}
                placeholder="MM/AA"
                className="h-12 w-full rounded-xl border bg-background px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold text-muted-foreground">CVC</label>
              <input 
                type="text"
                name="cvc"
                value={card.cvc}
                onChange={handleCardChange}
                placeholder="123"
                className="h-12 w-full rounded-xl border bg-background px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      )}

      {method === "pix" && (
        <div className="space-y-4 text-center animate-in fade-in slide-in-from-bottom-4">
          <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-2xl border-4 border-green-500 bg-white p-2 shadow-xl">
            {/* Fake QR Code using styling */}
            <div className="grid h-full w-full grid-cols-5 grid-rows-5 gap-1 bg-black p-2 opacity-80" 
                 style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%, 20% 20%, 20% 80%, 80% 80%, 80% 20%, 0% 20%)" }}>
            </div>
          </div>
          <p className="text-sm font-bold text-green-700 dark:text-green-500">
            Escaneie o QR Code ou copie o código PIX na próxima etapa para confirmar seu pedido.
          </p>
          <p className="text-xs text-muted-foreground">
            Aprovação em até 10 segundos.
          </p>
        </div>
      )}
    </div>
  );
}
