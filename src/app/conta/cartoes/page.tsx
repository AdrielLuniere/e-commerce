import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { CreditCard, Plus } from "lucide-react";

export default async function CardsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-black">
          <CreditCard className="h-6 w-6 text-primary" />
          Meus Cartões
        </h2>
        <button className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90">
          <Plus className="h-4 w-4" />
          Novo Cartão
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Card Mock */}
        <div className="flex h-48 flex-col justify-between rounded-2xl bg-gradient-to-br from-indigo-900 to-indigo-600 p-6 text-white shadow-xl">
          <div className="flex justify-between items-start">
            <span className="font-bold tracking-widest text-white/80">CREDIT</span>
            <span className="text-xl font-black italic">VISA</span>
          </div>
          <div>
            <div className="mb-2 text-2xl font-black tracking-widest font-mono">
              •••• •••• •••• 4589
            </div>
            <div className="flex justify-between text-sm uppercase tracking-wider text-white/80">
              <span>ADRIEL LUNIERE</span>
              <span>12/29</span>
            </div>
          </div>
        </div>

        {/* Empty State / Add New */}
        <button className="flex h-48 flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-muted bg-muted/10 transition-colors hover:bg-muted/30">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Plus className="h-6 w-6" />
          </div>
          <span className="font-bold text-muted-foreground">Adicionar Novo Cartão</span>
        </button>
      </div>
    </div>
  );
}
