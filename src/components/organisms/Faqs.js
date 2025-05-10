'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question:
      'What types of agencies can benefit from your consulting services?',
    answer:
      'We work with creative, media, digital, and full-service agencies to improve operations, win new business, and retain clients more effectively.',
  },
  {
    question: 'How do you help agencies improve their pitch strategies?',
    answer:
      'Our team assists in pitch planning, storytelling, and presentation development to help agencies stand out in competitive pitches.',
  },
  {
    question:
      'Do you offer team training for account management best practices?',
    answer:
      'Yes, we provide tailored training sessions to help account teams improve client communication, project management, and relationship building.',
  },
  {
    question:
      'Can you help us implement better reporting and analytics for clients?',
    answer:
      'Absolutely. We offer guidance on building client dashboards, KPIs tracking, and reporting frameworks to demonstrate your agency’s value.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='max-w-4xl mx-auto px-4 py-16'>
      <h2 className='text-3xl font-bold mb-8 text-center'>
        Frequently Asked Questions
      </h2>
      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <div key={index} className='border-b border-gray-200 pb-2'>
            <button
              onClick={() => toggle(index)}
              className={`flex justify-between items-center w-full text-left transition-colors ${
                activeIndex === index ? 'text-orange-500' : 'text-gray-800'
              }`}
            >
              <span className='font-medium'>{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='overflow-hidden mt-2 text-sm text-gray-600'
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
