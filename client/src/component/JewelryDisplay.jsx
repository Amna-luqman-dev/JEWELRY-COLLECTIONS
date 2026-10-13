import React, { useState } from 'react';

const JewelryDisplay = () => {
  const items = [
    {
      id: 1,
      title: "Diamond Rings",
      subtitle: "Exclusive Gold & Diamond Rings",
      image: "/assets/ring1.jpeg",
      description: "Handcrafted diamond rings tailored for your special occasions.",
    },
    {
      id: 2,
      title: "Gold Necklaces",
      subtitle: "Royal Bridal Necklaces",
      image: "/assets/pandent5.jpeg",
      description: "Exquisite traditional and modern bridal gold necklaces.",
    },
    {
      id: 3,
      title: "Elegant Earrings",
      subtitle: "Sparkling Diamond Studs",
      image: "/assets/ear rings.jpeg",
      description: "Brilliant diamond and gemstone earrings to elevate your look.",
    },
    {
      id: 4,
      title: "Luxury Bracelets",
      subtitle: "Handcrafted Premium Bangles",
      image: "/assets/new 4.jpeg",
      description: "Sophisticated bracelets and bangles designed with absolute precision.",
    },
  ];

  // State to manage which item's modal/card is open
  const [selectedItem, setSelectedItem] = useState(null);

  // States for user custom selection inside modal
  const [selectedColor, setSelectedColor] = useState("Gold");
  const [customPriceRange, setCustomPriceRange] = useState("Rs. 30,000 - Rs. 60,000");

  // Handler when user confirms their customization
  const handleConfirmOrder = () => {
    alert(`Customization Saved!\nItem: ${selectedItem.title}\nColor: ${selectedColor}\nBudget Range: ${customPriceRange}`);
    setSelectedItem(null); // Close modal after confirmation
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900">
          Our Exclusive Collection
        </h2>
        <p className="text-gray-600 mt-2">Explore our fine jewelry designs</p>
      </div>

      {/* 2 Grid Columns -> Desktop par 2x2 layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 rounded group-hover:scale-105"
              onError={(e) => { e.target.src = "https://via.placeholder.com/400"; }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Card Content */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="text-xs tracking-widest text-amber-300 font-semibold uppercase">
                Display
              </span>
              <h3 className="text-2xl font-serif font-bold mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200 mt-1">{item.subtitle}</p>
              
              {/* View Details Button to Open Modal */}
              <button 
                onClick={() => setSelectedItem(item)}
                className="mt-4 px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold rounded-full transition cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- NEW POPUP MODAL FOR CUSTOMIZATION --- */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-scale-up">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black font-bold text-lg cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Header */}
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
              {selectedItem.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {selectedItem.description}
            </p>

            <hr className="mb-4 border-gray-100" />

            {/* 1. Color Selection Options */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                Select Metal Color:
              </label>
              <div className="flex gap-3">
                {["Gold", "Silver", "Rose Gold", "Platinum"].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 text-xs rounded-lg border font-medium transition cursor-pointer ${
                      selectedColor === color 
                        ? "bg-amber-700 text-white border-amber-700 shadow-sm" 
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Custom Price Range Dropdown */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                Choose Price Range / Budget:
              </label>
              <select
                value={customPriceRange}
                onChange={(e) => setCustomPriceRange(e.target.value)}
                className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
              >
                <option value="Rs. 15,000 - Rs. 30,000">Rs. 15,000 - Rs. 30,000</option>
                <option value="Rs. 30,000 - Rs. 60,000">Rs. 30,000 - Rs. 60,000</option>
                <option value="Rs. 60,000 - Rs. 100,000">Rs. 60,000 - Rs. 100,000</option>
                <option value="Custom Budget">Custom Budget (As requested)</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => setSelectedItem(null)}
                className="w-1/2 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmOrder}
                className="w-1/2 py-2.5 bg-amber-900 text-white rounded-xl font-semibold text-sm hover:bg-amber-800 transition cursor-pointer shadow-md"
              >
                Confirm Customization
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default JewelryDisplay;