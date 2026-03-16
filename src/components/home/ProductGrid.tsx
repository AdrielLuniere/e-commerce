import ProductCard from "../common/ProductCard";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    name: "Headphone Quantum Noise Cancelling TWS Bluetooth",
    slug: "headphone-quantum",
    price: 1299.90,
    discount: 15,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    reviews: 128,
    isNew: true,
  },
  {
    id: "2",
    name: "Smartwatch Titanium Pro Series 8 com Monitor Cardíaco",
    slug: "smartwatch-titanium",
    price: 2499.00,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop",
    rating: 4,
    reviews: 89,
  },
  {
    id: "3",
    name: "Câmera Mirrorless Alpha 4K com Lente 50mm f/1.8",
    slug: "camera-mirrorless-alpha",
    price: 8500.00,
    discount: 10,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    reviews: 45,
  },
  {
    id: "4",
    name: "Teclado Mecânico Custom 75% Wireless RGB",
    slug: "teclado-mecanico-custom",
    price: 899.90,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop",
    rating: 4,
    reviews: 210,
    isOutOfStock: true,
  },
];

interface ProductGridProps {
  title: string;
  subtitle?: string;
}

export default function ProductGrid({ title, subtitle }: ProductGridProps) {
  return (
    <section className="container py-16">
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 className="mb-4 text-3xl font-black md:text-4xl">{title}</h2>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <button className="h-12 rounded-full border border-primary text-primary px-8 text-sm font-bold transition-all hover:bg-primary hover:text-white active:scale-95">
          Ver Todos os Produtos
        </button>
      </div>
    </section>
  );
}
