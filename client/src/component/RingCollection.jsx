import React from 'react';

// Sample Ring Collection Data
const ringCollection = [
  { id: 1, name: "Gold Diamond Ring", price: "Rs. 45,000", image: "/assets/ring2.jpeg" },
  { id: 2, name: "Silver Solitaire Ring", price: "Rs. 15,000", image: "/assets/ring1.jpeg" },
  { id: 3, name: "Rose Gold Band", price: "Rs. 25,000", image: "/assets/ring2.jpeg" },
  { id: 4, name: "Emerald Cut Ring", price: "Rs. 50,000", image: "/assets/ring5.jpeg" },
  { id: 5, name: "Platinum Wedding Band", price: "Rs. 60,000", image: "/assets/ring6.jpeg" },
  { id: 6, name: "Vintage Ruby Ring", price: "Rs. 35,000", image: "/assets/ring7.jpeg" },
];

const RingCollection = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Ring Collection</h2>
      
      {/* 3 Divs per row layout using Tailwind Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ringCollection.map((ring) => (
          <div 
            key={ring.id} 
            className="border rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 bg-white text-center"
          >
            <img 
              src={ring.image} 
              alt={ring.name} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{ring.name}</h3>
            <p className="text-gray-600 font-bold mb-4">{ring.price}</p>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RingCollection;