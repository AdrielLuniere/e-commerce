"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import Logo from "./Logo";
import { useCartStore } from "@/store/cartStore";
import CartDrawer from "../cart/CartDrawer";
import { useEffect, useState } from "react";

export default function Header() {
  const { totalItems, toggleCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/produtos"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Produtos
              </Link>
              <Link
                href="/categorias"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Categorias
              </Link>
              <Link
                href="/ofertas"
                className="text-sm font-medium text-destructive transition-colors hover:opacity-80"
              >
                Ofertas do Dia
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 items-center justify-end gap-4 md:flex-initial">
            <div className="relative hidden w-full max-w-sm items-center lg:flex">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Buscar produtos..."
                className="h-10 w-full rounded-full border bg-muted/50 pl-10 pr-4 text-sm transition-all focus:bg-background focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted md:hidden">
                <Search className="h-5 w-5" />
              </button>
              <Link
                href="/conta"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted"
              >
                <User className="h-5 w-5" />
              </Link>
              <button 
                onClick={toggleCart}
                className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted"
              >
                <ShoppingCart className="h-5 w-5" />
                {mounted && totalItems() > 0 && (
                  <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-sm">
                    {totalItems()}
                  </span>
                )}
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted md:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  );
}
