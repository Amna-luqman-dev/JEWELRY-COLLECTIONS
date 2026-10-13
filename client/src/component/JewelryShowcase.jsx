import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

const JewelryShowcase = () => {
  // Top Div ke liye 3 Images
  const galleryImages = [
    {
      id: 1,
      title: "Royal Gold Set",
      url: "/assets/img1.jpg",
    },
    {
      id: 2,
      title: "Diamond Solitaire",
      url: "/assets/img2.jpg",
    },
    {
      id: 3,
      title: "Bridal Collection",
      url: "/assets/img3.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900">
          Latest Modern Display Collection
        </h2>
        <p className="text-gray-600 mt-2">Explore our fine jewelry designs</p>
      </div>
      
      {/* ---------------- TOP DIV: 3 Pictures Display ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-amber-100"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-90"
            />
            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            
            {/* Image Title */}
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                Iqra Jewelry
              </span>
              <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- BOTTOM DIV: Beautiful Text & Highlights ---------------- */}
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100/50 rounded-3xl p-8 md:p-12 border border-amber-200/60 shadow-sm text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles size={14} className="text-amber-700" />
          Pure Elegance & Tradition
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-950 max-w-3xl mx-auto leading-tight">
          Crafted with Precision, Designed for Your Special Moments
        </h2>

        {/* Descriptive Text */}
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          At <strong className="text-amber-900 font-semibold">Iqra Jewelry</strong>, every piece reflects timeless craftsmanship and unmatched purity. From classic 22K gold heritage designs to contemporary diamond sets, we bring your dream jewelry to life.
        </p>

        {/* 3 Small Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-amber-200/50">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-amber-200/60 flex items-center justify-center text-amber-900 mb-3">
              <Sparkles size={22} />
            </div>
            <h4 className="font-serif font-bold text-amber-950 text-lg">100% Certified Gold</h4>
            <p className="text-xs text-gray-500 mt-1">Guaranteed hallmark purity in every article.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-amber-200/60 flex items-center justify-center text-amber-900 mb-3">
              <ShieldCheck size={22} />
            </div>
            <h4 className="font-serif font-bold text-amber-950 text-lg">Handcrafted Perfection</h4>
            <p className="text-xs text-gray-500 mt-1">Designed by master artisans with delicate details.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-amber-200/60 flex items-center justify-center text-amber-900 mb-3">
              <HeartHandshake size={22} />
            </div>
            <h4 className="font-serif font-bold text-amber-950 text-lg">Custom Orders</h4>
            <p className="text-xs text-gray-500 mt-1">Directly order your custom designs via WhatsApp.</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default JewelryShowcase;