import React from 'react';

// Sample Ring Collection Data
const pandentCollections = [
  { id: 1, name: "Heart lovely", price: "Rs. 45,000", image: "/assets/pandent1.jpeg" },
  { id: 2, name: "Silver Solitaire Ring", price: "Rs. 15,000", image: "/assets/pandent2.jpeg" },
  { id: 3, name: "Peach hear Pandent", price: "Rs. 25,000", image: "/assets/pandent3.jpeg" },
  { id: 4, name: "Emerald Cut Ring", price: "Rs. 50,000", image: "/assets/pandent4.jpeg" },
  { id: 5, name: "Platinum Wedding Band", price: "Rs. 60,000", image: "/assets/pandent5.jpeg" },
  { id: 6, name: "Vintage Ruby Ring", price: "Rs. 35,000", image: "/assets/pandent6.jpeg" },
];

const PandentCollection= () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Pandent Collection</h2>
      
      {/* 3 Divs per row layout using Tailwind Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pandentCollections.map((pandent) => (
          <div 
            key={pandent.id} 
            className="border rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 bg-white text-center"
          >
            <img 
              src={pandent.image} 
              alt={pandent.name} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{pandent.name}</h3>
            <p className="text-gray-600 font-bold mb-4">{pandent.price}</p>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PandentCollection;