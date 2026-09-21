import { ArrowRight, MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  return (
    <section className="bg-muted py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-serif font-bold text-3xl md:text-5xl uppercase tracking-tight">
          Found something you like?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Ask us about availability, sizes, and colors directly on WhatsApp. We are here to help you find your perfect fit.
        </p>
        <div className="pt-4 flex justify-center">
          <a
            href="https://wa.me/918100192501?text=Hi%20Fashion%20Baruipur,%20I'm%20interested%20in%20exploring%20your%20collection."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
