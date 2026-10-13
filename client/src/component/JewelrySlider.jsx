import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const JewelrySlider = () => {
  // 4 Images ka array
  const slides = [
    {
      id: 1,
      image: "/assets/ring2.jpeg",
      title: "Royal Diamond Collection",
      subtitle: "Up to 30% OFF on Bridal Sets",
    },
    {
      id: 2,
      image: "/assets/pandent3.jpeg",
      title: "Handcrafted Gold Necklaces",
      subtitle: "Pure 22K Gold Fine Jewelry",
    },
    {
      id: 3,
      image: "/assets/diamondstud.webp",
      title: "Luxury Diamond Studs",
      subtitle: "Elegance for Every Occasion",
    },
    {
      id: 4,
      image: "/assets/new 5.jpag",
      title: "Exclusive Gold Bracelets",
      subtitle: "New Arrivals in Store",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Previous slide par jaane ke liye
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Next slide par jaane ke liye
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Dots se direct slide select karne ke liye
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-play feature (Har 4 seconds mein image change hogi)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900">
          Our  Collection
        </h2>
        <p className="text-gray-600 mt-2">Explore our fine jewelry designs</p>
      </div>

      <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden group shadow-2xl">
        {/* Background Image */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          className="w-full h-full bg-center bg-cover duration-700 ease-in-out"
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-100 drop-shadow-lg">
              {slides[currentIndex].title}
            </h2>
            <p className="text-lg md:text-2xl text-gray-200 mt-3 drop-shadow">
              {slides[currentIndex].subtitle}
            </p>
            <button className="mt-6 px-6 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-full transition shadow-lg">
              Shop Collection
            </button>
          </div>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-3 bg-black/50 text-white hover:bg-black/70 cursor-pointer transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-3 bg-black/50 text-white hover:bg-black/70 cursor-pointer transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Bottom Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === slideIndex
                  ? 'w-8 bg-amber-500'
                  : 'w-3 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JewelrySlider;