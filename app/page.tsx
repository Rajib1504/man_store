import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CategorySection from "@/components/sections/CategorySection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import EditorialSection from "@/components/sections/EditorialSection";
import SocialsSection from "@/components/sections/SocialsSection";
import LocationSection from "@/components/sections/LocationSection";
import WhatsAppCTA from "@/components/sections/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Fashion Baruipur | Premium Men's Fashion in Baruipur, West Bengal",
  description:
    "Explore premium men's fashion, footwear, and accessories at Fashion Baruipur — your destination for shirts, jeans, shoes, watches and more in Baruipur, West Bengal.",
  openGraph: {
    title: "Fashion Baruipur | Premium Men's Fashion",
    description:
      "Discover modern men's clothing, footwear and accessories at Fashion Baruipur, Baruipur, West Bengal.",
    siteName: "Fashion Baruipur",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <EditorialSection />
        <SocialsSection />
        <LocationSection />
        <WhatsAppCTA />
      </main>
      <Footer />
    </>
  );
}
