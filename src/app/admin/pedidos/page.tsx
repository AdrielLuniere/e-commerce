import { Search, Eye } from "lucide-react";

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black">Pedidos</h1>
      </div>

      <div className="flex items-center gap-4 rounded-xl border bg-card p-2 md:w-1/3">
        <Search className="h-5 w-5 text-muted-foreground ml-2" />
        <input 
          type="text" 
          placeholder="Buscar por ID..." 
          className="flex-1 bg-transparent px-2 text-sm focus:outline-none"
        />
      </div>

      <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-6 py-4 font-bold">ID do Pedido</th>
                <th className="px-6 py-4 font-bold">Cliente</th>
                <th className="px-6 py-4 font-bold">Data</th>
                <th className="px-6 py-4 font-bold">Total</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Ver</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { id: "ORD-9281A", client: "João Silva", date: "Hoje, 14:32", total: 1299.90, status: "Pago" },
                { id: "ORD-1029B", client: "Maria Souza", date: "Ontem, 09:15", total: 450.00, status: "Enviado" },
                { id: "ORD-7382C", client: "Carlos Dias", date: "15/03/2026", total: 89.90, status: "Pendente" },
              ].map((p, i) => (
                <tr key={i} className="transition-colors hover:bg-muted/20">
                  <td className="px-6 py-4 font-bold uppercase">{p.id}</td>
                  <td className="px-6 py-4">{p.client}</td>
                  <td className="px-6 py-4 text-muted-foreground">{p.date}</td>
                  <td className="px-6 py-4 font-bold">R$ {p.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-bold ${
                      p.status === 'Pago' ? 'bg-green-100 text-green-700' : 
                      p.status === 'Enviado' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground">
                      <Eye className="h-4 w-4" />
                    </button>
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
