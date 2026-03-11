export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-10">
      <section className="container">
        <div className="relative overflow-hidden rounded-3xl bg-primary/5 py-24 md:py-32">
          <div className="container relative z-10 flex flex-col items-center text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Nova Coleção 2024
            </span>
            <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Elevando Sua <br />
              <span className="text-primary">Experiência Digital</span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Descubra uma curadoria exclusiva de produtos tecnológicos e minimalistas para o seu dia a dia.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="h-12 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 active:scale-95">
                Comprar Agora
              </button>
              <button className="h-12 rounded-full border bg-background px-8 text-sm font-bold transition-all hover:bg-muted active:scale-95">
                Saber Mais
              </button>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </div>
      </section>

      {/* Categories Simple Grid */}
      <section className="container">
        <h2 className="mb-10 text-3xl font-bold">Categorias em Destaque</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {["Tecnologia", "Minimalismo", "Saúde", "Acessórios"].map((cat) => (
            <div key={cat} className="group relative aspect-square overflow-hidden rounded-2xl bg-muted cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center transition-transform group-hover:scale-110">
                 <span className="text-xl font-black uppercase opacity-20">{cat}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-lg font-bold text-white">{cat}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
