'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';

export default function OverlappingHero() {
  return (
    <section className='relative bg-gray-50 py-20 px-6 lg:px-16'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between'>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-xl mb-12 lg:mb-0'
        >
          <h1 className='text-5xl font-bold mb-4'>{dataSite.subtitle}</h1>
          <p className='text-gray-600 mb-6'>{dataSite.description}</p>
          <button className='bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition'>
            Book a night
          </button>
        </motion.div>

        {/* Right Images */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative'
        >
          {/* Background Image */}
          <img
            src={dataSite.image_hero}
            alt='Main Room'
            className='rounded-lg shadow-lg w-[500px] max-w-full'
          />

          {/* Overlapping Image */}
          <div className='absolute -bottom-10 -left-10 bg-white p-2 rounded-lg shadow-lg'>
            <img
              src={dataSite.image_hero2}
              alt='Secondary Room'
              className='w-[250px] rounded-lg'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
