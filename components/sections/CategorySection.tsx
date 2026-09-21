import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categoryHighlights = [
  {
    name: "Shirts",
    image:
      "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/collections?category=Shirts",
  },
  {
    name: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    href: "/collections?category=T-Shirts",
  },
  {
    name: "Jeans",
    image:
      "https://images.unsplash.com/photo-1539619854632-cf2ff7529e6b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/collections?category=Jeans",
  },
  {
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1617689563472-c66428e83d17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/collections?category=Shoes",
  },
  {
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/collections?category=Watches",
  },
];

export default function CategorySection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="font-serif font-bold text-3xl md:text-5xl uppercase tracking-tight">
            Shop By Category
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Discover our curated collection of men&apos;s essentials designed
            for the modern wardrobe.
          </p>
        </div>
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 font-medium hover:text-black/70 transition-colors uppercase tracking-wide text-sm pb-1 border-b border-black"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {categoryHighlights.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group block relative aspect-[3/4] overflow-hidden bg-muted"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-serif font-semibold text-xl tracking-wide">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
