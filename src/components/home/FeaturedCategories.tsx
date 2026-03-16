import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    id: "1",
    name: "Tecnologia",
    slug: "tecnologia",
    image: "https://images.unsplash.com/photo-1550009158-9effb64fda70?q=80&w=800&auto=format&fit=crop",
    items: 120,
  },
  {
    id: "2",
    name: "Minimalismo",
    slug: "minimalismo",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
    items: 85,
  },
  {
    id: "3",
    name: "Casa Inteligente",
    slug: "casa-inteligente",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
    items: 43,
  },
  {
    id: "4",
    name: "Áudio Premium",
    slug: "audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    items: 67,
  },
];

export default function FeaturedCategories() {
  return (
    <section className="container py-16 text-center">
      <div className="mb-10 flex items-end justify-between text-left">
        <div>
          <h2 className="mb-2 text-3xl font-black md:text-4xl">Conheça Nossas Coleções</h2>
          <p className="text-muted-foreground">O que há de melhor em tecnologia e design para você.</p>
        </div>
        <Link href="/categorias" className="hidden items-center gap-2 font-bold text-primary transition-colors hover:text-primary/80 md:flex">
          Ver Todas <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/categoria/${cat.slug}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted transition-all hover:shadow-2xl"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity group-hover:opacity-90" />
            
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-end p-6 text-left transition-transform duration-300 group-hover:-translate-y-2">
              <h3 className="mb-1 text-2xl font-bold text-white tracking-tight">{cat.name}</h3>
              <p className="text-sm text-gray-300">{cat.items} Produtos</p>
            </div>
          </Link>
        ))}
      </div>
      
      <Link href="/categorias" className="mt-8 inline-flex items-center gap-2 font-bold text-primary md:hidden">
        Ver Todas <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
