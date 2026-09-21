import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

// Show 8 featured products on home page
const featured = products.slice(0, 8);

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-[#f0f0ef]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-5xl uppercase tracking-tight">
              Men&apos;s Collection
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Curated picks across shirts, jeans, footwear and accessories.
            </p>
          </div>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 font-medium hover:text-black/70 transition-colors uppercase tracking-wide text-sm pb-1 border-b border-black whitespace-nowrap"
          >
            See All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
