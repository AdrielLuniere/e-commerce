import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Package, MapPin, Heart } from "lucide-react";

export default async function AccountDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h2 className="mb-6 text-2xl font-black">
        Olá, {session.user?.name || "Usuário"}!
      </h2>
      <p className="mb-8 text-muted-foreground">
        A partir do painel da sua conta, você pode visualizar seus pedidos recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Orders Card */}
        <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/30 p-8 text-center transition-colors hover:bg-muted/50">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Package className="h-8 w-8" />
          </div>
          <h3 className="mb-2 font-bold">Meus Pedidos</h3>
          <p className="text-sm text-muted-foreground">
            Acompanhe a entrega dos seus produtos.
          </p>
        </div>

        {/* Addresses Card */}
        <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/30 p-8 text-center transition-colors hover:bg-muted/50">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MapPin className="h-8 w-8" />
          </div>
          <h3 className="mb-2 font-bold">Endereços</h3>
          <p className="text-sm text-muted-foreground">
            Gerencie onde suas entregas chegarão.
          </p>
        </div>

        {/* Wishlist Card */}
        <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/30 p-8 text-center transition-colors hover:bg-muted/50">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Heart className="h-8 w-8" />
          </div>
          <h3 className="mb-2 font-bold">Favoritos</h3>
          <p className="text-sm text-muted-foreground">
            Sua lista de desejos.
          </p>
        </div>
      </div>
    </div>
  );
}
