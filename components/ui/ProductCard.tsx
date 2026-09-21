"use client";

import Link from "next/link";
import Image from "next/image";
import { type Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block w-full">
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Details */}
      <div className="mt-4 flex flex-col gap-1">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
          {product.category}
        </p>
        <h3 className="text-sm md:text-base font-medium text-foreground truncate group-hover:underline decoration-1 underline-offset-4">
          {product.name}
        </h3>
        <p className="text-sm md:text-base font-semibold text-foreground">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
