import Link from "next/link";
import { Package, MapPin, ExternalLink, ArrowLeft } from "lucide-react";
import VisualTimeline from "@/components/tracking/VisualTimeline";

const MOCK_EVENTS = [
  {
    status: "Pedido Realizado",
    date: "14 de Março, 2026 - 10:30",
    description: "Seu pedido foi recebido pelo nosso sistema.",
    completed: true,
    current: false,
  },
  {
    status: "Pagamento Aprovado",
    date: "14 de Março, 2026 - 10:35",
    description: "Pagamento confirmado. Preparando para separação.",
    completed: true,
    current: false,
  },
  {
    status: "Em Separação",
    date: "15 de Março, 2026 - 08:15",
    description: "Seu pedido está sendo separado e embalado no centro de distribuição.",
    completed: true,
    current: false,
  },
  {
    status: "Em Transporte",
    date: "16 de Março, 2026 - 14:20",
    description: "Pedido coletado pela transportadora. A caminho do seu endereço.",
    completed: false,
    current: true,
  },
  {
    status: "Entregue",
    date: "Previsão: 18 de Março, 2026",
    description: "Pedido entregue ao destinatário.",
    completed: false,
    current: false,
  }
];

export default function TrackingDetailsPage({ params }: { params: { id: string } }) {
  const orderId = params.id;

  return (
    <div className="container py-8 md:py-16">
      <Link href="/rastreio" className="mb-6 inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para Pesquisa
      </Link>

      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            Rastreio de Pedido
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Acompanhe o status do pedido <strong className="text-foreground">{orderId}</strong>
          </p>
        </div>
        <div className="flex h-12 items-center gap-2 rounded-xl border bg-card px-4 text-sm font-bold shadow-sm">
          Status: 
          <span className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Em Transporte
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Timeline Area */}
        <div className="lg:col-span-2">
          <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-8">
            <h2 className="mb-8 text-xl font-black">Histórico de Movimentações</h2>
            <div className="pl-4">
              <VisualTimeline events={MOCK_EVENTS} />
            </div>
          </div>
        </div>

        {/* Details Sidebar */}
        <div className="space-y-6">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-black">
              <MapPin className="h-5 w-5 text-primary" />
              Endereço de Entrega
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Avenida Paulista, 1000<br />
              Conjunto 102 - Bela Vista<br />
              São Paulo, SP - 01310-100
            </p>
          </div>

          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-black">
              <Package className="h-5 w-5 text-primary" />
              Itens do Pedido
            </h3>
            <div className="flex items-center gap-4 border-b pb-4 mb-4">
              <div className="h-16 w-16 rounded-xl bg-muted overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop" alt="Produto" className="h-full w-full object-cover" />
              </div>
              <div>
                <span className="line-clamp-2 text-sm font-bold">Headphone Quantum Noise Cancelling TWS Bluetooth</span>
                <span className="mt-1 block text-xs text-muted-foreground">Qtd: 1</span>
              </div>
            </div>
            
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-secondary-foreground transition-all hover:bg-secondary/80">
              <ExternalLink className="h-4 w-4" />
              Ver Fatura Completa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
