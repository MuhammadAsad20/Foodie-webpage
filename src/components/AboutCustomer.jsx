import React from 'react';
import { motion, useInView } from 'framer-motion';

function AboutCustomer() {
  // Using Framer Motion's useInView hook
  const ref = React.useRef(null);
  // 'once: false' ensures the animation happens every time the section comes into view
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  return (
    <div>
      <section ref={ref} className="mt-16 p-8 rounded-lg">
        <motion.h3
          className="text-3xl font-semibold text-center mb-6 text-customPink"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          What Our Customers Say
        </motion.h3>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-700 mb-4">
              "The food at [Your Restaurant Name] is simply amazing! The attention to detail and quality is unmatched. I always leave with a full stomach and a smile on my face."
            </p>
            <p className="font-bold text-pink-600">- Emily R.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-700 mb-4">
              "A fantastic dining experience from start to finish. The staff are friendly and the atmosphere is perfect for a night out. Highly recommend!"
            </p>
            <p className="font-bold text-pink-600">- Michael T.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutCustomer;
