import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

const Navbar = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Yahan search functionality ka code aayega
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
      {/* Top Banner (Optional - Announcement Bar) */}
      <div className="bg-amber-900 text-amber-50 text-xs py-5 text-center font-light tracking-wide">
        ✨ Free Worldwide Shipping on Orders Over $150 ✨
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
         {/* 1. Logo Name */}
<div className="flex-shrink-0 flex items-center">
  <a href="/" className="group flex flex-col items-start">
    <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-900 tracking-wider group-hover:text-amber-700 transition">
      IQRA
    </span>
    <span className="text-[10px] sm:text-xs tracking-[0.25em] font-sans uppercase text-amber-700 font-medium -mt-1">
      Jewelry
    </span>
  </a>
</div>

          {/* 2. Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                placeholder="Search rings, necklaces, diamonds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-amber-50/50 text-gray-800 rounded-full border border-amber-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition placeholder-gray-400"
              />
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-amber-700" />
            </form>
          </div>

          {/* 3. Action Icons & Auth (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Login / Register */}
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <User className="h-5 w-5 text-amber-900" />
              <a href="/login" className="hover:text-amber-700 font-medium transition">
                Login
              </a>
              <span className="text-gray-300">/</span>
              <a href="/register" className="hover:text-amber-700 font-medium transition">
                Register
              </a>
            </div>

            {/* Add to Cart Icon */}
            <a href="/cart" className="relative p-2 text-amber-900 hover:text-amber-700 transition" aria-label="Shopping Cart">
              <ShoppingBag className="h-6 w-6" />
              {cartCount >= 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-amber-700 rounded-full">
                  {cartCount}
                </span>
              )}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <a href="/cart" className="relative p-1 text-amber-900">
              <ShoppingBag className="h-6 w-6" />
              {cartCount >= 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold text-white bg-amber-700 rounded-full">
                  {cartCount}
                </span>
              )}
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-900 hover:text-amber-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

        </div>

        {/* Search Bar for Mobile View */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search jewelry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-amber-50/50 text-gray-800 rounded-full border border-amber-200 focus:outline-none focus:border-amber-500"
            />
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-amber-700" />
          </form>
        </div>
      </div>

      {/* Mobile Drawer / Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-amber-100 px-4 pt-2 pb-6 space-y-4">
          <div className="pt-2 border-t border-amber-50 flex items-center justify-around text-sm font-medium">
            <a href="/login" className="flex items-center gap-2 text-amber-900 hover:text-amber-700">
              <User className="h-4 w-4" /> Login
            </a>
            <span className="text-gray-300">|</span>
            <a href="/register" className="text-amber-900 hover:text-amber-700">
              Register Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;