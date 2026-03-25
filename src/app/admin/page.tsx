import { DollarSign, ShoppingBag, Users, TrendingUp } from "lucide-react";

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-black">Dashboard</h1>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-muted-foreground">Faturamento</h3>
            <DollarSign className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-4 text-3xl font-black">R$ 45.231,89</p>
          <p className="mt-1 flex items-center text-sm font-medium text-green-600">
            <TrendingUp className="mr-1 h-3 w-3" /> +12% esse mês
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-muted-foreground">Vendas</h3>
            <ShoppingBag className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-4 text-3xl font-black">+234</p>
          <p className="mt-1 flex items-center text-sm font-medium text-green-600">
            <TrendingUp className="mr-1 h-3 w-3" /> +18% esse mês
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-muted-foreground">Clientes Ativos</h3>
            <Users className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-4 text-3xl font-black">1.205</p>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            Desde o início
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-muted-foreground">Conversão</h3>
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-4 text-3xl font-black">3.2%</p>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            Média da loja
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Chart mock */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm lg:col-span-2">
          <h3 className="mb-4 text-lg font-bold">Vendas Recentes</h3>
          <div className="flex h-64 items-center justify-center rounded-xl border border-dashed bg-muted/20">
            <span className="text-muted-foreground">Gráfico de Vendas (Integração com Recharts)</span>
          </div>
        </div>

        {/* Small List */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold">Últimos Pedidos</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-bold">ORD-000{i}</p>
                  <p className="text-xs text-muted-foreground">Fulano de Tal</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">R$ 199,90</p>
                  <p className="text-xs text-green-600">Aprovado</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
