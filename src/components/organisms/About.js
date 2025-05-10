'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';

export default function AboutAgencySection() {
  return (
    <section id='about' className='bg-gray-50 px-6 py-20 lg:px-16'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center'>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='lg:col-span-2'
        >
          <h2 className='text-4xl font-bold mb-6'>
            Our agency provides strategic consulting to help brands grow and
            thrive in an ever-evolving market.
          </h2>
          <p className='text-gray-600 mb-6 max-w-2xl'>
            We specialize in market positioning, creative strategy, and customer
            engagement, guiding your agency toward long-term success with
            tailored solutions for every stage of growth.
          </p>
          <button className='bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition'>
            Learn About Our Approach
          </button>

          {/* Metrics */}
          <div className='mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center'>
            <div>
              <p className='text-5xl font-bold mb-2'>100%</p>
              <p className='text-gray-600'>Client Satisfaction</p>
            </div>
            {/* <div>
              <p className='text-5xl font-bold mb-2'>15+</p>
              <p className='text-gray-600'>Years of Experience</p>
            </div> */}
            <div>
              <p className='text-5xl font-bold mb-2'>10+</p>
              <p className='text-gray-600'>Brands Supported</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={dataSite.services[0].image}
            alt='Creative Workspace'
            className='rounded-lg shadow-lg w-full'
          />
        </motion.div>
      </div>
    </section>
  );
}
