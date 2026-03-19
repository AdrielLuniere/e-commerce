import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { MapPin, Plus } from "lucide-react";

export default async function AddressesPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-black">
          <MapPin className="h-6 w-6 text-primary" />
          Meus Endereços
        </h2>
        <button className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90">
          <Plus className="h-4 w-4" />
          Adicionar
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative flex flex-col justify-between rounded-xl border-2 border-primary bg-primary/5 p-6">
          <span className="absolute right-4 top-4 rounded-full bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            Padrão
          </span>
          <div>
            <h3 className="mb-1 font-bold">Casa</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rua Fictícia dos Testes, 123<br />
              Apt 45B - Bairro Centro<br />
              São Paulo, SP - 01000-000<br />
              Brasil
            </p>
          </div>
          <div className="mt-6 flex gap-4 text-sm font-bold text-primary">
            <button className="hover:underline">Editar</button>
            <button className="text-destructive hover:underline">Remover</button>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-dashed bg-muted/30 p-6 transition-colors hover:bg-muted/50">
          <div>
            <h3 className="mb-1 font-bold">Trabalho</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Av. Paulista, 1000<br />
              Conjunto 102 - Bela Vista<br />
              São Paulo, SP - 01310-100<br />
              Brasil
            </p>
          </div>
          <div className="mt-6 flex gap-4 text-sm font-bold text-primary">
            <button className="hover:underline">Editar</button>
            <button className="text-destructive hover:underline">Remover</button>
            <button className="hover:underline">Tornar Padrão</button>
          </div>
        </div>
      </div>
    </div>
  );
}
