import ImageGallery from "@/components/products/ImageGallery";
import ProductInfo from "@/components/products/ProductInfo";
import ShippingCalculator from "@/components/products/ShippingCalculator";
import ProductReviews from "@/components/products/ProductReviews";
import ProductGrid from "@/components/home/ProductGrid";
import { notFound } from "next/navigation";

// Mock Product Fetcher
const getProductBySlug = (slug: string) => {
  if (!slug) return null;
  return {
    id: "1",
    name: "Headphone Quantum Noise Cancelling TWS Bluetooth",
    slug,
    price: 1299.90,
    discount: 15,
    description: "Desfrute do mais puro áudio com o Headphone Quantum. Equipado com a tecnologia Adaptive Noise Cancelling, ele bloqueia os sons externos sem comprometer a qualidade da sua música. Design ergonômico, hastes em alumínio anodizado e earcups de espuma com memória.",
    rating: 4.8,
    reviews: 128,
    stock: 45,
    colors: [
      { label: "Matte Black", value: "#202020" },
      { label: "Titanium Silver", value: "#A8A8A8" },
      { label: "Midnight Blue", value: "#1A2B4C" },
    ],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop",
    ]
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Produto não encontrado" };

  return {
    title: `${product.name} | Antigravity Shop`,
    description: product.description.substring(0, 150) + "...",
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-8 md:py-16">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <a href="/" className="hover:text-primary">Home</a>
        <span>/</span>
        <a href="/produtos" className="hover:text-primary">Produtos</a>
        <span>/</span>
        <span className="font-medium text-foreground">{product.name}</span>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Column: Gallery */}
        <ImageGallery images={product.images} />

        {/* Right Column: Info & Actions */}
        <div className="flex flex-col gap-8">
          <ProductInfo product={product} />
          <ShippingCalculator />
        </div>
      </div>

      {/* Reviews */}
      <ProductReviews />

      {/* Related Products */}
      <div className="mt-16">
        <ProductGrid title="Você também pode gostar" subtitle="" />
      </div>
    </div>
  );
}
