'use client';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow' : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
        <h1 className='text-2xl font-bold'>DEHOUSE</h1>
        <ul className='hidden md:flex gap-6 text-gray-700'>
          <li>About</li>
          <li>Rooms</li>
          <li>Food</li>
          <li>Contact</li>
        </ul>
        <button className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition'>
          Book a night
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
