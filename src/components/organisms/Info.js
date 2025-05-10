'use client';

import { dataSite } from '@/data';

export default function InfoSection() {
  const benefits = dataSite.info.map((item, index) => {
    return {
      id: '00' + (index + 1),
      title: item.title,
      description: item.description,
    };
  });

  return (
    <section className='bg-gray-900 text-white px-6 py-20 lg:px-16 flex flex-col lg:flex-row items-center gap-10'>
      {/* Left content */}
      <div className='flex-1 max-w-2xl'>
        <h2 className='text-4xl font-serif mb-8'>
          We empower agencies to deliver exceptional campaigns through strategic
          consulting, creative excellence, and operational efficiency.
        </h2>
        <div className='space-y-8'>
          {benefits.map((benefit) => (
            <div key={benefit.id} className='flex items-start gap-4'>
              <span className='text-orange-500 font-bold text-lg'>
                ({benefit.id})
              </span>
              <div>
                <h3 className='font-semibold text-xl mb-1'>{benefit.title}</h3>
                <p className='text-gray-300'>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right image */}
      <div className='flex-1 max-w-md'>
        <img
          src={dataSite.services[2].image}
          alt='Creative Agency Office'
          className='rounded-lg shadow-lg'
        />
      </div>
    </section>
  );
}
