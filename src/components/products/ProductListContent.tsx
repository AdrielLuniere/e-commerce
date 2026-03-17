"use client";

import { useState } from "react";
import ProductCard from "../common/ProductCard";
import ProductFilters from "./ProductFilters";
import { Filter, ChevronDown, LayoutGrid, List } from "lucide-react";

// Reusing DUMMY_PRODUCTS from Home
const DUMMY_PRODUCTS = [
  {
    id: "1",
    name: "Headphone Quantum Noise Cancelling TWS Bluetooth",
    slug: "headphone-quantum",
    price: 1299.90,
    discount: 15,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    reviews: 128,
    isNew: true,
  },
  {
    id: "2",
    name: "Smartwatch Titanium Pro Series 8 com Monitor Cardíaco",
    slug: "smartwatch-titanium",
    price: 2499.00,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop",
    rating: 4,
    reviews: 89,
  },
  {
    id: "3",
    name: "Câmera Mirrorless Alpha 4K com Lente 50mm f/1.8",
    slug: "camera-mirrorless-alpha",
    price: 8500.00,
    discount: 10,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    reviews: 45,
  },
  {
    id: "4",
    name: "Teclado Mecânico Custom 75% Wireless RGB",
    slug: "teclado-mecanico-custom",
    price: 899.90,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop",
    rating: 4,
    reviews: 210,
    isOutOfStock: true,
  },
  {
    id: "5",
    name: "Mouse Gamer Predator Pro Wireless 16000 DPI",
    slug: "mouse-gamer-predator",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1527814050087-379381547996?q=80&w=600&auto=format&fit=crop",
    rating: 4,
    reviews: 32,
  },
  {
    id: "6",
    name: "Monitor Ultrawide Pro 34'' Curvo 144Hz",
    slug: "monitor-ultrawide-pro-34",
    price: 3200.00,
    discount: 5,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    reviews: 76,
  }
];

export default function ProductListContent() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  return (
    <div className="container py-8 md:py-12">
      {/* Page Header */}
      <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-black tracking-tight sm:text-4xl">
            Todos os Produtos
          </h1>
          <p className="text-muted-foreground">
            Explore nossa coleção completa de tecnologia e lifestyle.
          </p>
        </div>
        
        {/* Sort & View Options */}
        <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-start">
          <button 
            className="flex h-10 items-center gap-2 rounded-xl border bg-card px-4 text-sm font-medium md:hidden"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <Filter className="h-4 w-4" />
            Filtros
          </button>
          
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground md:inline-block">Ordernar por:</span>
            <div className="relative">
              <select className="h-10 appearance-none rounded-xl border bg-card px-4 pr-10 text-sm font-medium outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                <option>Mais Relevantes</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
                <option>Novidades</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters (Desktop) */}
        <aside className="hidden w-64 shrink-0 md:block">
          <ProductFilters />
        </aside>

        {/* Mobile Filters Overlay */}
        {isMobileFiltersOpen && (
          <div className="fixed inset-0 z-50 flex bg-black/50 backdrop-blur-sm md:hidden">
            <div className="ml-auto w-[85%] max-w-sm animate-in slide-in-from-right-full bg-background p-6 shadow-2xl h-full overflow-y-auto">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold">Filtros</h3>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="rounded-full p-2 bg-muted text-muted-foreground hover:bg-black/10">
                  ✕
                </button>
              </div>
              <ProductFilters />
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-6 hidden items-center justify-between md:flex">
            <p className="text-sm font-medium text-muted-foreground">
              Mostrando <span className="text-foreground">1-{DUMMY_PRODUCTS.length}</span> de <span className="text-foreground">120</span> produtos
            </p>
            <div className="flex gap-2">
              <button className="rounded-md bg-muted p-2 text-primary">
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DUMMY_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="h-10 w-10 rounded-xl border bg-card font-bold transition-colors hover:bg-primary hover:text-white">1</button>
            <button className="h-10 w-10 rounded-xl border bg-card font-bold transition-colors hover:bg-primary hover:text-white">2</button>
            <button className="h-10 w-10 rounded-xl border bg-card font-bold transition-colors hover:bg-primary hover:text-white">3</button>
            <span className="flex h-10 w-10 items-center justify-center text-muted-foreground">...</span>
            <button className="h-10 w-10 rounded-xl border bg-card font-bold transition-colors hover:bg-primary hover:text-white">8</button>
          </div>
        </div>
      </div>
    </div>
  );
}
