import { Plus, Search, Edit, Trash2 } from "lucide-react";

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black">Produtos</h1>
        <button className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90">
          <Plus className="h-4 w-4" />
          Novo Produto
        </button>
      </div>

      <div className="flex items-center gap-4 rounded-xl border bg-card p-2 md:w-1/3">
        <Search className="h-5 w-5 text-muted-foreground ml-2" />
        <input 
          type="text" 
          placeholder="Buscar produtos..." 
          className="flex-1 bg-transparent px-2 text-sm focus:outline-none"
        />
      </div>

      <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-6 py-4 font-bold">Produto</th>
                <th className="px-6 py-4 font-bold">Categoria</th>
                <th className="px-6 py-4 font-bold">Preço</th>
                <th className="px-6 py-4 font-bold">Estoque</th>
                <th className="px-6 py-4 font-bold text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { name: "Tênis Runner Pro X", cat: "Calçados", price: 499.90, stock: 120 },
                { name: "Camiseta Basic Algodão", cat: "Vestuário", price: 89.90, stock: 350 },
                { name: "Relógio Digital Sport", cat: "Acessórios", price: 299.00, stock: 45 },
              ].map((p, i) => (
                <tr key={i} className="transition-colors hover:bg-muted/20">
                  <td className="px-6 py-4 font-medium">{p.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{p.cat}</td>
                  <td className="px-6 py-4 font-bold text-primary">R$ {p.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-bold ${
                      p.stock > 50 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {p.stock} un
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="rounded-lg p-2 text-destructive hover:bg-destructive/10">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
