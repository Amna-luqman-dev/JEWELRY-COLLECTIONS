import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'; 
import Display from './component/Display.jsx';
import JewelryDisplay from './component/JewelryDisplay';
import JewelrySlider from './component/JewelrySlider';
import JewelryHeroSection from './component/JewelryHeroSection';
import JewelryShowcase from './component/JewelryShowcase';
import Footer from './component/Footer';
import RingCollection from './component/RingCollection';
import PandentCollection from './component/PandentCollection';

function App() {
  const [cartCount, setCartCount] = useState(2);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
        {/* Navbar sab pages par common rahegi */}
        <Navbar cartCount={cartCount} />

        {/* Yahan Routes ke zariye alag-alag pages handle honge */}
        <div className="flex-grow">
          <Routes>
            {/* Home Page (Jab URL sirf '/' ho) */}
            <Route 
              path="/" 
              element={
                <>
                  <JewelryHeroSection />
                  <JewelryShowcase />
                  <JewelrySlider />
                </>
              } 
            />

            {/* Baqi components ke apne routes */}
            <Route path="/display" element={<Display />} />
            <Route path="/jewelryDisplay" element={<JewelryDisplay />} />
            <Route path="/rings" element={<RingCollection />} />
            <Route path="/pendants" element={<PandentCollection />} />
          </Routes>
        </div>

        {/* Footer bhi sab pages par niche show hoga */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;