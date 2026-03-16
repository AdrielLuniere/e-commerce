import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import ProductGrid from "@/components/home/ProductGrid";
import DailyOffers from "@/components/home/DailyOffers";
import BrandsAndBenefits from "@/components/home/BrandsAndBenefits";
import NewsletterPopup from "@/components/home/NewsletterPopup";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      <HeroCarousel />
      <FeaturedCategories />
      <ProductGrid 
        title="Lançamentos & Mais Vendidos" 
        subtitle="A seleção perfeita para atualizar seu ecossistema digital." 
      />
      <DailyOffers />
      <BrandsAndBenefits />
      <NewsletterPopup />
    </div>
  );
}
