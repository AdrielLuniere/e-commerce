"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartDrawer() {
  const [mounted, setMounted] = useState(false);
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCartStore();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 z-[60] flex w-full flex-col bg-background shadow-2xl transition-transform duration-300 ease-in-out sm:max-w-md ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="flex items-center gap-2 text-lg font-black">
            <ShoppingBag className="h-5 w-5" />
            Seu Carrinho
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <p className="mb-2 text-lg font-bold">Seu carrinho está vazio</p>
              <p className="text-sm text-muted-foreground">
                Descubra nossos produtos incríveis e adicione itens ao carrinho.
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-6 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border bg-muted">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between gap-2">
                        <Link 
                          href={`/produtos/${item.productId}`}
                          onClick={() => setIsOpen(false)}
                          className="line-clamp-2 text-sm font-bold hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      
                      {/* Variations */}
                      <div className="mt-1 flex gap-2 text-xs text-muted-foreground">
                        {item.color && (
                          <div className="flex items-center gap-1">
                            <span className="h-3 w-3 rounded-full border shadow-inner" style={{ backgroundColor: item.color }} />
                          </div>
                        )}
                        {item.size && <span>Tam: {item.size}</span>}
                      </div>
                    </div>

                    <div className="flex items-end justify-between">
                      <div className="flex items-center rounded-lg border bg-background">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-foreground">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-black text-primary">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Summary */}
        {items.length > 0 && (
          <div className="border-t bg-muted/30 px-6 py-6 pb-safe">
            <div className="mb-4 flex justify-between text-base font-bold">
              <span>Subtotal</span>
              <span className="text-xl text-primary">R$ {totalPrice().toFixed(2)}</span>
            </div>
            <p className="mb-6 text-xs text-muted-foreground">
              Frete e impostos serão calculados no checkout.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/carrinho"
                onClick={() => setIsOpen(false)}
                className="flex h-12 w-full items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                Finalizar Compra
              </Link>
              <Link
                href="/carrinho"
                onClick={() => setIsOpen(false)}
                className="flex h-12 w-full items-center justify-center rounded-xl border border-primary/20 bg-background text-sm font-bold text-primary transition-all hover:bg-primary/5"
              >
                Ver Carrinho Completo
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
