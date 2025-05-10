'use client';
import { dataSite } from '@/data';
import { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = dataSite.references;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className='bg-orange-600 text-white px-6 py-20 lg:px-16'>
      <div className='max-w-4xl mx-auto flex flex-col items-start gap-6'>
        <span className='text-xl font-serif'>Client Reviews</span>
        <p className='text-3xl lg:text-4xl leading-relaxed'>
          “{testimonial.description}”
        </p>

        <div className='flex items-center gap-4 mt-4'>
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className='w-12 h-12 rounded-full'
            />
          ) : (
            <div className='w-12 h-12 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold'>
              {getInitials(testimonial.name)}
            </div>
          )}
          <div>
            <p className='font-semibold'>{testimonial.name}</p>
            <div className='flex text-yellow-300'>
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>

        <div className='flex gap-2 mt-6'>
          <button
            onClick={prev}
            className='bg-white/20 p-2 rounded-full hover:bg-white/30'
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className='bg-white/20 p-2 rounded-full hover:bg-white/30'
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
