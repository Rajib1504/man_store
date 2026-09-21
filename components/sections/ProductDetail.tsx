"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { type Product } from "@/data/products";
import { formatPrice, generateWhatsAppLink, cn } from "@/lib/utils";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const images = [product.image, ...product.gallery].filter(
    (img, i, arr) => arr.indexOf(img) === i
  );

  const handlePrev = () =>
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const waLink = generateWhatsAppLink(product.name);

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Back */}
      <Link
        href="/collections"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Collection
      </Link>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
            <Image
              src={images[activeImage]}
              alt={product.name}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative w-20 h-24 overflow-hidden flex-shrink-0 border-2 transition-colors",
                    activeImage === i ? "border-black" : "border-transparent"
                  )}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-8 lg:pt-4">
          {/* Category + Availability */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              {product.category}
            </span>
            <span className="text-xs text-white/90 font-medium">·</span>
            <span
              className={cn(
                "text-xs font-semibold px-2.5 py-1 rounded-full",
                product.availability === "In Stock"
                  ? "bg-green-100 text-green-700"
                  : product.availability === "Low Stock"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-600"
              )}
            >
              {product.availability}
            </span>
          </div>

          <div>
            <h1 className="font-serif font-bold text-3xl md:text-4xl leading-tight">
              {product.name}
            </h1>
            <p className="text-2xl font-bold mt-3">{formatPrice(product.price)}</p>
            <p className="text-xs text-muted-foreground mt-1">* Demo price — contact store for latest pricing</p>
          </div>

          <p className="text-muted-foreground leading-relaxed text-base">
            {product.description}
          </p>

          {/* Sizes */}
          {product.sizes.length > 0 && product.sizes[0] !== "One Size" && (
            <div>
              <p className="font-semibold text-sm mb-3 uppercase tracking-wide">
                Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "px-4 py-2 border text-sm font-medium transition-colors",
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-black/20 hover:border-black"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          <div>
            <p className="font-semibold text-sm mb-3 uppercase tracking-wide">
              Available Colours
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "px-4 py-2 border rounded-full text-sm font-medium transition-colors",
                    selectedColor === color
                      ? "bg-black text-white border-black"
                      : "border-black/20 hover:border-black"
                  )}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 pt-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-full font-semibold text-base hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Ask on WhatsApp
            </a>
            <Link
              href="/collections"
              className="w-full flex items-center justify-center gap-2 border border-black py-4 rounded-full font-semibold text-base hover:bg-black hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collection
            </Link>
          </div>

          <p className="text-xs text-muted-foreground pt-2">
            Please enquire on WhatsApp for exact size &amp; colour availability before visiting the store.
          </p>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-28">
          <h2 className="font-serif font-bold text-2xl md:text-3xl uppercase tracking-tight mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
