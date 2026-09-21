import Link from "next/link";
import Image from "next/image";

export default function EditorialSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-square w-full overflow-hidden bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop"
              alt="Editorial men's fashion"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-8 md:pr-12 lg:pr-24">
            <div className="inline-block border border-black px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
              Featured Collection
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-6xl uppercase tracking-tighter leading-[1.1]">
              The Everyday Edit
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Modern essentials for your everyday style. From sharp tailored fits to relaxed weekend wear, discover pieces that effortlessly transition through your day. We focus on premium fabrics and timeless silhouettes.
            </p>
            <div>
              <Link
                href="/collections"
                className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-black/80 transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
