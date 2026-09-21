"use client";

import Image from "next/image";
import { Play } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/fashion_baruipur_/?hl=en";
const FACEBOOK_URL =
  "https://www.facebook.com/p/Fashion-Baruipur-Official-61555921521374/";

const socialPosts = [
  {
    id: 1,
    type: "instagram",
    thumbnail:
      "https://i.ibb.co/JRvfggbh/771802330-122300879456197384-4607189414627509850-n.jpg",
    caption: "New arrivals — Summer Shirts",
    url: INSTAGRAM_URL,
  },
  {
    id: 2,
    type: "instagram",
    thumbnail:
      "https://i.ibb.co/JRvfggbh/771802330-122300879456197384-4607189414627509850-n.jpg",
    caption: "Premium Chinos — explore now",
    url: INSTAGRAM_URL,
  },
  {
    id: 3,
    type: "facebook",
    thumbnail:
      "https://images.unsplash.com/photo-1617195737496-bc30194e3a19?q=80&w=800&auto=format&fit=crop",
    caption: "Store video — new collection",
    url: FACEBOOK_URL,
  },
  {
    id: 4,
    type: "instagram",
    thumbnail:
      "https://i.ibb.co/QF5BVRgT/774116962-18004350857992024-2378815712292287208-n.jpg",
    caption: "Raw denim — the perfect fit",
    url: INSTAGRAM_URL,
  },
  {
    id: 5,
    type: "facebook",
    thumbnail:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    caption: "Footwear drop — limited stock",
    url: FACEBOOK_URL,
  },
  {
    id: 6,
    type: "instagram",
    thumbnail:
      "https://i.ibb.co/JRvfggbh/771802330-122300879456197384-4607189414627509850-n.jpg",
    caption: "Timepieces — elegance on your wrist",
    url: INSTAGRAM_URL,
  },
];

const badgeColors: Record<string, string> = {
  instagram: "bg-gradient-to-br from-purple-500 to-pink-500",
  facebook: "bg-blue-600",
};

/* ── Reusable tile ── */
function PostTile({
  post,
  className = "",
  textSize = "sm",
  landscape = false,
}: {
  post: (typeof socialPosts)[0];
  className?: string;
  textSize?: "sm" | "lg";
  landscape?: boolean;
}) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden bg-zinc-900 block ${className}`}
    >
      <Image
        src={post.thumbnail}
        alt={post.caption}
        fill
        className="object-cover opacity-75 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Caption */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 md:p-5 flex ${
          landscape
            ? "items-center justify-between"
            : "flex-col justify-end gap-2"
        }`}
      >
        <p
          className={`text-white font-medium leading-snug ${
            textSize === "lg" ? "text-base md:text-lg" : "text-xs md:text-sm"
          }`}
        >
          {post.caption}
        </p>
        {landscape && (
          <div className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </div>
        )}
      </div>

      {/* Platform badge — top right */}
      <div
        className={`absolute top-3 right-3 ${badgeColors[post.type]} rounded-full w-6 h-6 flex items-center justify-center`}
      >
        {post.type === "instagram" ? (
          <svg
            className="w-3.5 h-3.5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
          </svg>
        ) : (
          <svg
            className="w-3.5 h-3.5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        )}
      </div>
    </a>
  );
}

export default function SocialsSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-white/40 text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
              Follow Along
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-6xl uppercase tracking-tight leading-none">
              From Our
              <br />
              Socials
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
              @fashion_baruipur_
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        {/*
          Editorial Asymmetric Layout:
          ┌─────────────────┬──────────┬──────────┐
          │                 │  [2]     │  [4]     │
          │     [1]         ├──────────┤          │
          │   (tall hero)   │  [3]     ├──────────┤
          │                 │          │  [5]     │
          └─────────────────┴──────────┴──────────┘
          └──────────── [6] landscape ────────────┘
        */}
        <div className="flex flex-col gap-2">
          {/* Top section: hero + 2 columns */}
          <div className="grid grid-cols-2 md:grid-cols-[42%_29%_29%] grid-rows-2 md:grid-rows-none gap-2 md:h-[560px]">
            {/* [1] Hero — spans full height on desktop */}
            <PostTile
              post={socialPosts[0]}
              className="col-span-2 md:col-span-1 md:row-span-2 aspect-[4/3] md:aspect-auto h-full"
              textSize="lg"
            />

            {/* [2] top-middle */}
            <PostTile
              post={socialPosts[1]}
              className="aspect-square md:aspect-auto"
            />

            {/* [4] top-right — spans 2 rows */}
            <PostTile
              post={socialPosts[3]}
              className="row-span-2 aspect-[3/4] md:aspect-auto h-full"
            />

            {/* [3] bottom-middle */}
            <PostTile
              post={socialPosts[2]}
              className="aspect-square md:aspect-auto"
            />
          </div>

          {/* Bottom landscape strip */}
          <div className="grid grid-cols-2 gap-2">
            <PostTile
              post={socialPosts[4]}
              className="aspect-[4/3]"
              landscape
              textSize="lg"
            />
            <PostTile
              post={socialPosts[5]}
              className="aspect-[4/3]"
              landscape
              textSize="lg"
            />
          </div>
        </div>

        <p className="text-white/25 text-xs mt-8 italic">
          ✦ Preview thumbnails — follow us on Instagram &amp; Facebook for real
          store updates.
        </p>
      </div>
    </section>
  );
}
