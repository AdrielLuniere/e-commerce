"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { CheckCircle2, ChevronRight, Lock } from "lucide-react";
import AddressForm from "@/components/checkout/AddressForm";
import PaymentGateway from "@/components/checkout/PaymentGateway";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCartStore();
  const [step, setStep] = useState(1);
  const [addressValid, setAddressValid] = useState(false);
  const [paymentValid, setPaymentValid] = useState(true); // Default true for PIX
  const [loading, setLoading] = useState(false);

  // If cart is empty, user shouldn't be here
  if (items.length === 0) {
    if (typeof window !== "undefined") router.push("/carrinho");
    return null;
  }

  const handleNextStep = () => {
    if (step === 1 && addressValid) {
      setStep(2);
    } else if (step === 2 && paymentValid) {
      handleCompletePurchase();
    }
  };

  const handleCompletePurchase = () => {
    setLoading(true);
    // Simulate API logic to place order
    setTimeout(() => {
      clearCart();
      router.push("/checkout/sucesso");
    }, 2000);
  };

  const finalTotal = totalPrice(); // ignoring coupons for this flow demo

  return (
    <div className="container py-8 md:py-12 bg-muted/10 min-h-screen">
      <div className="mb-8 flex items-center justify-center gap-4 text-sm font-bold text-muted-foreground">
        <div className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : ""}`}>
          <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs text-white ${step >= 1 ? "bg-primary" : "bg-muted"}`}>1</div>
          <span>Entrega</span>
        </div>
        <ChevronRight className="h-4 w-4" />
        <div className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : ""}`}>
          <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs text-white ${step >= 2 ? "bg-primary" : "bg-muted"}`}>2</div>
          <span>Pagamento</span>
        </div>
        <ChevronRight className="h-4 w-4" />
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white bg-muted">3</div>
          <span>Confirmação</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col-reverse gap-8 lg:flex-row">
        {/* Main Process Area */}
        <div className="flex-1 space-y-6">
          {step === 1 && (
            <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-8 animate-in slide-in-from-right-8">
              <h2 className="mb-6 text-2xl font-black">Detalhes de Entrega</h2>
              <AddressForm onValidation={(valid) => setAddressValid(valid)} />
              <button 
                onClick={handleNextStep}
                disabled={!addressValid}
                className="mt-8 flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
              >
                Continuar para Pagamento
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-8 animate-in slide-in-from-right-8">
              <div className="mb-6 flex items-center justify-between border-b pb-4">
                <h2 className="text-2xl font-black">Pagamento</h2>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <Lock className="h-4 w-4" />
                  Ambiente Seguro
                </div>
              </div>
              <PaymentGateway onValidation={(valid) => setPaymentValid(valid)} />
              
              <div className="mt-8 flex gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="flex h-14 w-1/3 items-center justify-center rounded-xl border-2 font-bold text-muted-foreground transition-all hover:bg-muted"
                >
                  Voltar
                </button>
                <button 
                  onClick={handleNextStep}
                  disabled={!paymentValid || loading}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {loading ? (
                    "Processando..."
                  ) : (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Finalizar Compra
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="sticky top-28 rounded-3xl border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-black tracking-tight">Resumo do Pedido</h3>
            
            <div className="mb-4 flex max-h-60 flex-col gap-4 overflow-y-auto border-b pb-4 pr-2">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover bg-muted" />
                  <div className="flex flex-1 flex-col justify-center">
                    <span className="line-clamp-2 text-sm font-bold">{item.name}</span>
                    <span className="text-xs text-muted-foreground">Qtd: {item.quantity}</span>
                    <span className="text-sm font-black text-primary">R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-bold">R$ {finalTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Frete</span>
                <span className="font-bold">Grátis</span>
              </div>
              <div className="mt-4 flex justify-between border-t pt-4 text-lg font-black">
                <span>Total a pagar</span>
                <span className="text-primary">R$ {finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
