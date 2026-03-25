import Link from "next/link";
import { LayoutDashboard, ShoppingBag, Users, Settings, Package, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-muted/20">
      {/* Sidebar Admin */}
      <aside className="w-64 shrink-0 border-r bg-card flex flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/admin" className="text-xl font-black tracking-tighter">
            Antigravity <span className="text-primary text-sm uppercase tracking-widest block font-bold">Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          <Link href="/admin" className="flex items-center gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">
            <LayoutDashboard className="h-5 w-5" />
            Visão Geral
          </Link>
          <Link href="/admin/pedidos" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
            <ShoppingBag className="h-5 w-5" />
            Pedidos
          </Link>
          <Link href="/admin/produtos" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
            <Package className="h-5 w-5" />
            Produtos
          </Link>
          <Link href="/admin/clientes" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
            <Users className="h-5 w-5" />
            Clientes
          </Link>
        </nav>
        
        <div className="border-t p-4">
          <Link href="/" className="flex items-center justify-between gap-3 text-sm font-medium text-muted-foreground hover:text-foreground">
            Sair do Admin
            <LogOut className="h-4 w-4" />
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="flex h-16 items-center justify-between border-b bg-card px-8">
          <div className="text-sm font-bold text-muted-foreground">Bem-vindo(a) de volta, Admin!</div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-black">
            AD
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
