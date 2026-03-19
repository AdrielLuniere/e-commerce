"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { Trash2, Plus, Minus, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartPageContent() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.toUpperCase() === "BEMVINDO15") {
      setDiscount(15);
    } else {
      alert("Cupom inválido ou expirado.");
      setDiscount(0);
    }
  };

  if (!mounted) return null;

  const subtotal = totalPrice();
  const discountAmount = (subtotal * discount) / 100;
  const finalTotal = subtotal - discountAmount;

  if (items.length === 0) {
    return (
      <div className="container py-24 text-center">
        <h1 className="mb-4 text-4xl font-black">Meu Carrinho</h1>
        <p className="mb-8 text-xl text-muted-foreground">Seu carrinho está vazio no momento.</p>
        <Link 
          href="/produtos"
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-bold text-primary-foreground transition-all hover:scale-105"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Voltar às Compras
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="mb-8 text-3xl font-black tracking-tight sm:text-4xl">Meu Carrinho</h1>

      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="hidden border-b pb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground md:grid md:grid-cols-[2fr_1fr_1fr_auto] md:gap-4">
            <div>Produto</div>
            <div className="text-center">Quantidade</div>
            <div className="text-right">Subtotal</div>
            <div className="w-8"></div>
          </div>

          <div className="flex flex-col">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-1 items-center gap-4 border-b py-6 md:grid-cols-[2fr_1fr_1fr_auto]">
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border bg-muted">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <Link href={`/produtos/${item.productId}`} className="line-clamp-2 font-bold transition-colors hover:text-primary">
                      {item.name}
                    </Link>
                    <div className="mt-1 flex gap-2 text-sm text-muted-foreground">
                      {item.color && (
                        <div className="flex items-center gap-1">
                          <span className="h-3 w-3 rounded-full border shadow-inner" style={{ backgroundColor: item.color }} />
                        </div>
                      )}
                      {item.size && <span>Tam: {item.size}</span>}
                    </div>
                    <div className="mt-1 font-bold text-primary md:hidden">
                      R$ {item.price.toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between md:justify-center">
                  <span className="text-sm font-bold md:hidden">Quantidade:</span>
                  <div className="flex items-center rounded-xl border bg-background px-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-bold">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="hidden text-right font-black text-primary md:block md:text-lg">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove */}
                <div className="flex justify-end md:block">
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    title="Remover produto"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="sticky top-28 rounded-3xl border bg-card p-6 shadow-sm md:p-8">
            <h3 className="mb-6 text-xl font-black">Resumo do Pedido</h3>

            {/* Subtotal */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold">R$ {subtotal.toFixed(2)}</span>
            </div>

            {/* Discount */}
            {discount > 0 && (
              <div className="mb-4 flex items-center justify-between text-green-600 dark:text-green-400">
                <span>Desconto ({discount}%)</span>
                <span className="font-bold">- R$ {discountAmount.toFixed(2)}</span>
              </div>
            )}

            {/* Shipping (Mock) */}
            <div className="mb-6 flex items-center justify-between">
              <span className="text-muted-foreground">Frete</span>
              <span className="text-sm font-bold uppercase text-primary">A calcular</span>
            </div>

            {/* Total */}
            <div className="mb-8 flex items-end justify-between border-t pt-4">
              <span className="text-lg font-bold">Total</span>
              <div className="text-right">
                <span className="block text-3xl font-black text-primary">
                  R$ {finalTotal.toFixed(2)}
                </span>
                <span className="text-xs text-muted-foreground">
                  em até 10x de R$ {(finalTotal / 10).toFixed(2)} sem juros
                </span>
              </div>
            </div>

            <button className="mb-6 flex h-14 w-full items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              Continuar para Checkout
            </button>

            {/* Coupon field */}
            <div className="rounded-xl border bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-muted-foreground">
                <Tag className="h-4 w-4" />
                Cupom de Desconto
              </div>
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input 
                  type="text" 
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="EX: BEMVINDO15"
                  className="h-10 w-full rounded-lg border bg-background px-3 text-sm uppercase focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button 
                  type="submit"
                  className="rounded-lg bg-secondary px-4 text-sm font-bold text-secondary-foreground transition-all hover:bg-secondary/80"
                >
                  Aplicar
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
