"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Men's Fashion"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9]">
            Style That <br /> Speaks For You.
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            Explore men&apos;s fashion, footwear, and accessories at Fashion Baruipur.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link
              href="/collections"
              className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Explore Collection
            </Link>
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7379.672762036845!2d88.4230665935791!3d22.3598061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026d401751726d%3A0x5a240d7469e63a4a!2sFashion%20Baruipur!5e0!3m2!1sen!2sin!4v1790022065208!5m2!1sen!2sin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-black/40 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-black/60 transition-colors flex items-center justify-center gap-2"
            >
              Visit Store <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
