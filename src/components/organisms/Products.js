'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';

const products = dataSite.products;

export default function ProductShowcase() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='products' className='py-20 px-6 lg:px-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold mb-10 text-gray-900'>
          Featured Products
        </h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((product, index) => {
            const isInCart = validateProductInCart(product.id);
            const handleClick = () => {
              handleAddOrRemoveProduct(product.id);
            };
            const buttonText = isInCart ? 'Remove from Cart' : 'Add to Cart';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className='relative rounded-xl overflow-hidden shadow-md bg-white'
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-56 object-cover'
                />
                <div className='absolute top-4 left-4 bg-yellow-400 text-black text-sm px-3 py-1 rounded-full shadow'>
                  $ {product.price}
                </div>
                <div className='p-6'>
                  <h3 className='text-lg font-semibold'>{product.name}</h3>
                  <p className='text-sm text-gray-600 mt-2'>
                    {product.description}
                  </p>
                  <button
                    onClick={handleClick}
                    style={{
                      backgroundColor: isInCart ? '#F05247FF' : '#EE7A21FF',
                    }}
                    className='mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition'
                  >
                    {buttonText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
