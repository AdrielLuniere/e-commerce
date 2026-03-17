"use client";

import { useState } from "react";
import { Truck, MapPin } from "lucide-react";

export default function ShippingCalculator() {
  const [cep, setCep] = useState("");
  const [result, setResult] = useState<{ price: string; time: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const formatCEP = (value: string) => {
    return value.replace(/\D/g, "").replace(/^(\d{5})(\d)/, "$1-$2").slice(0, 9);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (cep.length !== 9) return;
    
    setLoading(true);
    // Simulate ViaCEP/Shipping API call
    setTimeout(() => {
      setResult({ price: "Grátis", time: "Em até 3 dias úteis" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="rounded-2xl border bg-card p-4">
      <div className="mb-4 flex items-center gap-2 font-bold">
        <Truck className="h-5 w-5 text-primary" />
        Consultar Frete e Prazo
      </div>
      
      <form onSubmit={handleCalculate} className="flex gap-2">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="00000-000"
            value={cep}
            onChange={(e) => setCep(formatCEP(e.target.value))}
            className="h-10 w-full rounded-xl border bg-background px-9 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <button 
          type="submit" 
          disabled={loading || cep.length !== 9}
          className="h-10 rounded-xl bg-secondary px-4 text-sm font-bold text-secondary-foreground transition-all hover:bg-secondary/80 disabled:opacity-50"
        >
          {loading ? "..." : "OK"}
        </button>
      </form>

      {result && (
        <div className="mt-4 flex items-center justify-between rounded-xl bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
          <div className="font-medium">Entrega Expressa</div>
          <div className="text-right">
            <div className="font-bold">{result.price}</div>
            <div className="text-xs">{result.time}</div>
          </div>
        </div>
      )}
      
      <div className="mt-4 text-xs text-muted-foreground">
        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noreferrer" className="underline hover:text-foreground">
          Não sei meu CEP
        </a>
      </div>
    </div>
  );
}
