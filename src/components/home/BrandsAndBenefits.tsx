import { Truck, ShieldCheck, CreditCard, HeadphonesIcon } from "lucide-react";

export default function BrandsAndBenefits() {
  const BENEFITS = [
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Frete Grátis",
      description: "Em compras acima de R$ 299",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Compra 100% Segura",
      description: "Dados protegidos e encriptados",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Pagamento Facilitado",
      description: "Parcele em até 12x sem juros",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      title: "Suporte Premium",
      description: "Atendimento humano 24/7",
    },
  ];

  return (
    <section className="border-t border-b bg-muted/20 py-16">
      <div className="container">
        {/* Top Brands Placeholder */}
        <div className="mb-16">
          <p className="mb-8 text-center text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Marcas Parceiras
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale transition-all hover:grayscale-0">
            {/* Replace with real brand SVGs */}
            <div className="text-2xl font-black">SONY</div>
            <div className="text-2xl font-black">APPLE</div>
            <div className="text-2xl font-black">SAMSUNG</div>
            <div className="text-2xl font-black">LOGITECH</div>
            <div className="text-2xl font-black">JBL</div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                {benefit.icon}
              </div>
              <div>
                <h4 className="mb-1 text-base font-bold">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
