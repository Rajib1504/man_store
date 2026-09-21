"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/ui/ProductCard";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

function CollectionsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initial = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(initial);

  useEffect(() => {
    const cat = searchParams.get("category") || "All";
    setActiveCategory(cat);
  }, [searchParams]);

  const allCategories = ["All", ...categories];

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleFilter = (cat: string) => {
    setActiveCategory(cat);
    const params = new URLSearchParams();
    if (cat !== "All") params.set("category", cat);
    router.push(`/collections?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase mb-3">
          Fashion Baruipur
        </p>
        <h1 className="font-serif font-bold text-4xl md:text-6xl uppercase tracking-tight">
          Men&apos;s Collection
        </h1>
        <p className="text-muted-foreground mt-3">
          {filtered.length} {filtered.length === 1 ? "product" : "products"}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors",
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black/20 hover:border-black"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {filtered.length === 0 ? (
          <div className="py-32 text-center text-muted-foreground">
            <p className="text-2xl font-serif">No products found</p>
            <button onClick={() => handleFilter("All")} className="mt-6 underline text-sm">
              Clear filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// Skeleton shown during Suspense fallback
function CollectionsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-8 w-48 bg-muted animate-pulse rounded mb-4" />
      <div className="h-12 w-72 bg-muted animate-pulse rounded mb-12" />
      <div className="flex gap-2 mb-12">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-10 w-20 bg-muted animate-pulse rounded-full" />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] bg-muted animate-pulse rounded" />
        ))}
      </div>
    </div>
  );
}

export default function CollectionsClient() {
  return (
    <Suspense fallback={<CollectionsSkeleton />}>
      <CollectionsContent />
    </Suspense>
  );
}
