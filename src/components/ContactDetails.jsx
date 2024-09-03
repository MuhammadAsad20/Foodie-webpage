import React from 'react';
import { motion, useInView } from 'framer-motion';

const ContactDetails = () => {
  // Create a reference to the section for in-view detection
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-50px' });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-3xl font-semibold mb-4">Contact Information</h3>
        {/* Animated Address */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg flex items-center"
        >
          <i className="fas fa-map-marker-alt text-customPink mr-2"></i>
          123 Food Street, Food City, FC 12345
        </motion.p>
        {/* Animated Phone Number */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg flex items-center"
        >
          <i className="fas fa-phone text-customPink mr-2"></i>
          +1 (234) 567-890
        </motion.p>
        {/* Animated Email */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-lg flex items-center"
        >
          <i className="fas fa-envelope text-customPink mr-2"></i>
          info@yourrestaurant.com
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ContactDetails;
