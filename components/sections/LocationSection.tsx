import { MapPin, Phone, Clock } from "lucide-react";

const stores = [
  {
    label: "Store 1",
    address:
      "Ajeyo Shangho Club,\nSubuddhipur, Baruipur,\nWest Bengal 700144, India",
    directionsUrl: "https://maps.app.goo.gl/DE2EsGF4UhoRYU7Q7",
    // Embed: extracted from the short link — Baruipur area fallback embed
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7379.672762036845!2d88.4230665935791!3d22.3598061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026d401751726d%3A0x5a240d7469e63a4a!2sFashion%20Baruipur!5e0!3m2!1sen!2sin!4v1790022065208!5m2!1sen!2sin",
  },
  {
    label: "Store 2",
    address:
      "Naskar Complex, \nKhodar Bazar, Baruipur, \nWest Bengal 700144, India",
    directionsUrl: "https://maps.app.goo.gl/W6CT3h5c1osyHMQX8",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7379.672762036845!2d88.4230665935791!3d22.3598061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026d68f8a1fbab%3A0x52ac56546b69eb61!2sFashion%20Baruipur%20branch%202!5e0!3m2!1sen!2sin!4v1790022519187!5m2!1sen!2sin",
  },
];

export default function LocationSection() {
  return (
    <section id="store" className="py-24 bg-[#f0f0ef]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-5xl uppercase tracking-tight leading-tight">
            Visit Our Stores
          </h2>
        </div>

        {/* Shared info row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14 pb-14 border-b border-black/10">
          <div className="flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1 uppercase tracking-wide">
                Location
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Subuddhipur, Baruipur,
                <br />
                West Bengal 700144, India
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1 uppercase tracking-wide">
                Phone
              </p>
              <a
                href="tel:+918100192501"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                +91 81001 92501
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1 uppercase tracking-wide">
                Hours
              </p>
              <p className="text-muted-foreground text-sm">
                Mon–Sat: 10:00 AM – 9:00 PM
                <br />
                Sunday: 11:00 AM – 8:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Two store maps side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {stores.map((store) => (
            <div
              key={store.label}
              className="flex flex-col gap-0 overflow-hidden"
            >
              {/* Map */}
              <div className="relative w-full h-[300px] md:h-[360px] bg-muted">
                <iframe
                  title={`Fashion Baruipur ${store.label} Location`}
                  src={store.embedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Store card under the map */}
              <div className="bg-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {store.label}
                  </span>
                  <p className="text-sm text-foreground mt-1 whitespace-pre-line leading-relaxed">
                    {store.address}
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <a
                    href={store.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-black/80 transition-colors whitespace-nowrap"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                  <a
                    href="tel:+918100192501"
                    className="inline-flex items-center justify-center gap-2 border border-black text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-black hover:text-white transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" />
                    Call Store
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
