import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SocialMediaLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  return (
    <div ref={ref} className="space-y-4">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-3xl font-semibold mb-4 text-center text-customPink"
      >
        Follow Us
      </motion.h3>
      <div className="flex justify-center space-x-8">
        {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon, index) => (
          <motion.a
            key={icon}
            href="#"
            className="text-customPink text-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2, type: 'spring', stiffness: 100, damping: 10 }}
            whileHover={{ scale: 1.2, rotate: 15, y: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={`fab fa-${icon}`}></i>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
