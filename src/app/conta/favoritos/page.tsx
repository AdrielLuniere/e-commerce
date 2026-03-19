import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Heart } from "lucide-react";

export default async function WishlistPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-black">
        <Heart className="h-6 w-6 text-primary" />
        Lista de Desejos
      </h2>

      <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
          <Heart className="h-12 w-12 text-muted-foreground stroke-[1.5]" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">Sua lista está vazia</h3>
        <p className="mb-8 max-w-sm text-sm">
          Você ainda não adicionou nenhum produto aos seus favoritos. Navegue pela loja e salve o que mais gostar!
        </p>
        <a 
          href="/produtos" 
          className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all active:scale-95"
        >
          Explorar Produtos
        </a>
      </div>
    </div>
  );
}
