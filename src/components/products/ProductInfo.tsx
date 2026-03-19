"use client";

import { useState } from "react";
import { Star, ShieldCheck, ShoppingCart, Heart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

interface ProductInfoProps {
  product: {
    id: string;
    name: string;
    price: number;
    discount?: number;
    description: string;
    rating: number;
    reviews: number;
    stock: number;
    colors?: { label: string; value: string }[];
    sizes?: string[];
    image?: string;
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.value);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addItem);
  const setIsOpen = useCartStore((state) => state.setIsOpen);

  const currentPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: currentPrice,
      image: product.image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
      quantity,
      color: selectedColor,
      size: selectedSize,
    });
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Title & Rating */}
      <div>
        <h1 className="mb-2 text-3xl font-black tracking-tight sm:text-4xl">
          {product.name}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < product.rating ? "fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="ml-1 font-bold text-foreground">{product.rating.toFixed(1)}</span>
            <span>({product.reviews} avaliações)</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <ShieldCheck className="h-4 w-4" />
            Vendido e Entregue por Antigravity
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="rounded-2xl bg-muted/30 p-4">
        {product.discount > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground line-through">
              R$ {product.price.toFixed(2)}
            </span>
            <span className="rounded-full bg-destructive px-2 py-0.5 text-xs font-bold text-destructive-foreground">
              -{product.discount}% OFF
            </span>
          </div>
        )}
        <div className="flex items-end gap-2">
          <span className="text-4xl font-black text-primary">
            R$ {currentPrice.toFixed(2)}
          </span>
          <span className="pb-1 text-sm text-muted-foreground">à vista no PIX</span>
        </div>
        <div className="mt-1 text-sm text-muted-foreground">
          Ou em até <strong>10x de R$ {(product.price / 10).toFixed(2)}</strong> sem juros no cartão
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground">
        {product.description}
      </p>

      {/* Variations */}
      <div className="flex flex-col gap-4">
        {product.colors && (
          <div>
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Cor Selecionada: <span className="text-foreground capitalize">{product.colors.find(c => c.value === selectedColor)?.label}</span>
            </span>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`h-10 w-10 rounded-full border-2 transition-all hover:scale-110 ${
                    selectedColor === color.value ? "border-primary p-0.5" : "border-transparent"
                  }`}
                  aria-label={`Selecionar cor ${color.label}`}
                >
                  <span
                    className="block h-full w-full rounded-full border border-gray-200 shadow-inner"
                    style={{ backgroundColor: color.value }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {product.sizes && (
          <div>
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Tamanho
            </span>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex h-12 w-16 items-center justify-center rounded-xl border-2 font-bold transition-all hover:border-primary/50 ${
                    selectedSize === size
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-muted text-muted-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stock and Purchase Actions */}
      <div className="mt-4 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-green-100">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <span className="font-bold text-green-700 dark:text-green-500">
             Em Estoque ({product.stock} unidades)
          </span>
        </div>

        <div className="flex h-14 w-full gap-4">
          <div className="flex items-center justify-between rounded-xl border bg-background px-4 py-2 w-32">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="font-black text-muted-foreground hover:text-primary active:scale-95"
            >
              -
            </button>
            <span className="font-bold">{quantity}</span>
            <button 
              onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              className="font-black text-muted-foreground hover:text-primary active:scale-95"
            >
              +
            </button>
          </div>

          <button 
            onClick={handleAddToCart}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 active:scale-95"
          >
            <ShoppingCart className="h-5 w-5" />
            Adicionar ao Carrinho
          </button>
          
          <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border bg-card transition-all hover:bg-muted active:scale-95 tooltip" aria-label="Adicionar aos Favoritos">
            <Heart className="h-6 w-6 text-muted-foreground hover:text-red-500 hover:fill-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
