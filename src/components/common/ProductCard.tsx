import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    discount?: number;
    image: string;
    rating: number;
    reviews: number;
    isNew?: boolean;
    isOutOfStock?: boolean;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const currentPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-xl">
      {/* Badges */}
      <div className="absolute left-3 top-3 z-10 flex flex-col gap-2">
        {product.discount > 0 && (
          <span className="rounded-full bg-destructive px-2.5 py-1 text-xs font-bold text-destructive-foreground">
            -{product.discount}%
          </span>
        )}
        {product.isNew && (
          <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">
            Novo
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all hover:scale-110 hover:bg-primary hover:text-white">
          <Heart className="h-4 w-4" />
        </button>
      </div>

      {/* Image */}
      <Link href={`/produtos/${product.slug}`} className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
            <span className="rounded-full bg-white px-4 py-2 font-bold text-black text-sm uppercase tracking-wider">
              Esgotado
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Rating */}
        <div className="mb-2 flex items-center gap-1">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < product.rating ? "fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Title */}
        <Link href={`/produtos/${product.slug}`} className="mb-2 line-clamp-2 text-sm font-semibold transition-colors hover:text-primary">
          {product.name}
        </Link>
        
        <div className="mt-auto flex items-end justify-between">
          {/* Price */}
          <div className="flex flex-col">
            {product.discount > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                R$ {product.price.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-black text-primary">
              R$ {currentPrice.toFixed(2)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button 
            disabled={product.isOutOfStock}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:scale-110 hover:bg-primary/90 disabled:opacity-50 disabled:hover:scale-100"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
