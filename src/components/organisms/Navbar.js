'use client';
import { dataSite } from '@/data';
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
        {/* LOGO */}
        <div className='flex items-center'>
          <img src={dataSite.iconImage} alt='Logo' className='w-10 h-10 mr-2' />
          <span className='text-xl font-bold text-gray-800'>Blueshark</span>
        </div>

        {/* <h1 className='text-2xl font-bold'>Blueshark</h1> */}
        <ul className='hidden md:flex gap-6 text-gray-700'>
          <a href='/#about'>About</a>
          <a href='/#services'>Services</a>
          <a href='/#faqs'>Faqs</a>
          <a href='/#testimonials'>Testimonials</a>
          <a href='/#products'>Products</a>
          <a href='/more-information'>Contact</a>
        </ul>
        <button className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition'>
          Go to Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
