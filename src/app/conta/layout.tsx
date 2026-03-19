"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package, MapPin, CreditCard, Heart, LogOut, User } from "lucide-react";
import { signOut } from "next-auth/react";

const sidebarLinks = [
  { name: "Painel", href: "/conta", icon: User },
  { name: "Meus Pedidos", href: "/conta/pedidos", icon: Package },
  { name: "Endereços", href: "/conta/enderecos", icon: MapPin },
  { name: "Cartões", href: "/conta/cartoes", icon: CreditCard },
  { name: "Favoritos", href: "/conta/favoritos", icon: Heart },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="container py-8 md:py-16">
      <h1 className="mb-8 text-3xl font-black tracking-tight sm:text-4xl">
        Minha Conta
      </h1>

      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        {/* Sidebar */}
        <aside className="w-full shrink-0 rounded-2xl border bg-card p-4 shadow-sm md:w-64">
          <nav className="flex flex-col gap-2">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </Link>
              );
            })}
            
            <hr className="my-2" />
            
            <button 
              onClick={() => signOut({ callbackUrl: '/' })}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </button>
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1 rounded-2xl border bg-card p-6 shadow-sm min-h-[500px]">
          {children}
        </div>
      </div>
    </div>
  );
}
