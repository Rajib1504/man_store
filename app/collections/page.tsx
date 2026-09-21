import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CollectionsClient from "@/components/sections/CollectionsClient";

export const metadata: Metadata = {
  title: "Men's Collection | Fashion Baruipur",
  description:
    "Browse the full men's collection at Fashion Baruipur — shirts, t-shirts, jeans, trousers, shoes, watches and accessories in Baruipur, West Bengal.",
};

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 min-h-screen">
        <CollectionsClient />
      </main>
      <Footer />
    </>
  );
}
