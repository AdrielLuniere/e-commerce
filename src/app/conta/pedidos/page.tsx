import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Package } from "lucide-react";

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Mock Orders Data
  const mockOrders = [
    {
      id: "ORD-987654",
      date: "18 de Março, 2026",
      total: 1299.90,
      status: "Em trânsito",
      items: 1,
    },
    {
      id: "ORD-123456",
      date: "05 de Janeiro, 2026",
      total: 3450.00,
      status: "Entregue",
      items: 2,
    }
  ];

  return (
    <div>
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-black">
        <Package className="h-6 w-6 text-primary" />
        Meus Pedidos
      </h2>

      <div className="flex flex-col gap-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="flex flex-col gap-4 rounded-xl border bg-background p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-1 flex items-center gap-3">
                <span className="font-bold">{order.id}</span>
                <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                  order.status === "Entregue" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                }`}>
                  {order.status}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Feito em {order.date} • {order.items} {order.items === 1 ? "item" : "itens"}
              </div>
            </div>
            <div className="flex items-center justify-between md:flex-col md:items-end md:gap-2">
              <span className="font-black text-primary">R$ {order.total.toFixed(2)}</span>
              <button className="text-sm font-bold text-primary hover:underline">
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
