import Link from "next/link";
import { CheckCircle, PackageSearch, ArrowRight } from "lucide-react";

export default function CheckoutSuccessPage() {
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8 rounded-3xl border bg-card p-8 shadow-2xl text-center">
        
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
          <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-500" />
        </div>
        
        <div>
          <h2 className="text-3xl font-black tracking-tight text-foreground">
            Pedido Confirmado!
          </h2>
          <p className="mt-2 text-muted-foreground">
            Obrigado pela sua compra. Enviamos um email com o recibo e detalhes de acompanhamento.
          </p>
        </div>

        <div className="rounded-xl bg-muted/50 p-6 text-sm">
          <div className="flex justify-between border-b pb-4 mb-4">
            <span className="font-bold text-muted-foreground">Número do Pedido:</span>
            <span className="font-black text-foreground">{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-muted-foreground">Previsão de Entrega:</span>
            <span className="font-bold text-primary">Até 3 dias úteis</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href="/conta/pedidos"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-4 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all active:scale-95"
          >
            <PackageSearch className="h-5 w-5" />
            Acompanhar Pedido
          </Link>
          <Link
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-xl border-2 px-4 py-4 text-sm font-bold text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            Continuar Comprando
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
