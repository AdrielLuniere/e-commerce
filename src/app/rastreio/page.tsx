"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PackageSearch, ArrowRight } from "lucide-react";
import Logo from "@/components/common/Logo";

export default function TrackingSearchPage() {
  const router = useRouter();
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      router.push(`/rastreio/${orderId.toUpperCase()}`);
    }, 800);
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-muted/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-3xl border bg-card p-8 shadow-2xl text-center">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
            <PackageSearch className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground">
            Acompanhe seu Pedido
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Insira o código de rastreio ou o número do pedido enviado para o seu e-mail.
          </p>
        </div>
        
        <form className="mt-8 space-y-4" onSubmit={handleTrack}>
          <div>
            <input
              type="text"
              required
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="h-14 w-full rounded-2xl border bg-background px-6 text-center text-lg font-bold tracking-widest uppercase focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Ex: ORD-123456"
            />
          </div>

          <button
            type="submit"
            disabled={loading || orderId.length < 5}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
          >
            {loading ? "Buscando..." : (
              <>
                Rastrear Encomenda
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
