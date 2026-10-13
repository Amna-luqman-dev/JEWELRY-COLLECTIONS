import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const JewelryHeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

        <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900">
          Explores our collection
        </h2>
        <p className="text-gray-600 mt-2">Explore our fine jewelry designs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-amber-50/40 rounded-3xl p-6 md:p-8 border border-amber-100 shadow-sm">
        
        {/* Div 1: Video Display */}
        <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/jewelry-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Div 2: View Our Designs Content */}
        <div className="flex flex-col justify-center items-start space-y-5 p-2 md:p-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} className="text-amber-700" />
            Exquisite Craftsmanship
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-950 leading-tight">
            Discover & View Our Timeless Designs
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Explore our signature collection of handcrafted gold, bridal sets, and certified diamond jewelry designed for your special moments.
          </p>

          <div className="pt-2">
            <a
              href="/designs"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-amber-900 hover:bg-amber-800 text-amber-50 font-medium text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View Our Designs
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JewelryHeroSection;