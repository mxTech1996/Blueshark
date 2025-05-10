'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const services = dataSite.services;

export default function AgencyServicesSection() {
  return (
    <section className='bg-gray-50 px-6 py-20 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-6 mb-12'>
          <h2 className='text-4xl font-bold max-w-3xl'>
            You’ll benefit from a wide range of strategic consulting services
            designed to elevate your agency’s performance.
          </h2>
          <p className='text-gray-600 max-w-md'>
            Our expert consultants partner with you to optimize every aspect of
            your agency’s operations, from pitching to retention.
          </p>
          {/* <button className='bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition mt-4 md:mt-0'>
            Explore All Services
          </button> */}
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='mb-2 text-orange-500 font-semibold'>
                (00{index + 1})
              </div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-600 mb-4'>{service.description}</p>
              <img
                src={service.image}
                alt={service.title}
                className='w-full h-52 object-cover rounded shadow-md group-hover:shadow-lg transition'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
