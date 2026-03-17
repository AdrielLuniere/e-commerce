import { Filter, SlidersHorizontal, X } from "lucide-react";

interface ProductFiltersProps {
  className?: string;
}

export default function ProductFilters({ className = "" }: ProductFiltersProps) {
  const categories = ["Smartphones", "Laptops", "Acessórios", "Áudio", "Smartwatches"];
  const brands = ["Apple", "Samsung", "Sony", "Logitech", "JBL"];
  const prices = [
    "Até R$ 100",
    "R$ 100 a R$ 500",
    "R$ 500 a R$ 1000",
    "Acima de R$ 1000"
  ];

  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Categorias
        </h3>
        <ul className="flex flex-col gap-2">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="flex cursor-pointer items-center gap-2 text-sm transition-colors hover:text-primary">
                <input type="checkbox" className="rounded border-gray-300 bg-muted text-primary focus:ring-primary" />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Marcas
        </h3>
        <ul className="flex flex-col gap-2">
          {brands.map((brand) => (
            <li key={brand}>
              <label className="flex cursor-pointer items-center gap-2 text-sm transition-colors hover:text-primary">
                <input type="checkbox" className="rounded border-gray-300 bg-muted text-primary focus:ring-primary" />
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Preço
        </h3>
        <ul className="flex flex-col gap-2">
          {prices.map((price) => (
            <li key={price}>
              <label className="flex cursor-pointer items-center gap-2 text-sm transition-colors hover:text-primary">
                <input type="radio" name="price" className="border-gray-300 bg-muted text-primary focus:ring-primary" />
                {price}
              </label>
            </li>
          ))}
        </ul>
      </div>
      
      <button className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90">
        Aplicar Filtros
      </button>
    </div>
  );
}
