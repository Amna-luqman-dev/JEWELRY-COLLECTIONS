import React from 'react';
// import { Contact } from 'lucide-react';         // Icons yahan se aayenge
import { useNavigate } from 'react-router-dom';
export default function Display() {

const navigate = useNavigate();


  return (
    <div>
       <main className="relative w-full h-[75vh] flex flex-col items-center justify-center overflow-hidden">
  {/* 1. Background Video */}
 <video
  autoPlay
  loop
  muted
  playsInline
  src="/jewelry-bg.mp4"
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
>
   {/* <source src="/jewelry-bg.mp4" type="video/mp4" /> */}
    Your browser does not support the video tag.
  </video>

  {/* 2. Dark Overlay (Taki text saaf parha jaye) */}
  <div className="absolute inset-0 bg-black/40 z-10" />

  {/* 3. Text Content (Video ke upar show hoga) */}
  <div className="relative z-20 text-center px-4">
    <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-400 drop-shadow-md">
      Welcome to    IQRA Jewelry
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-xl mx-auto drop-shadow">
      Discover our luxurious rings, necklaces, and diamonds.
    </p>
   <button 
  className='m-5 p-3 rounded-xl text-lg bg-gray-200 hover:bg-gray-300 transition cursor-pointer' 
  onClick={() => navigate('/JewelrySlider')}
>
  order now
</button>
  </div>
</main>
    </div>
  )
}
