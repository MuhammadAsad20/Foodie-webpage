import React from 'react';
import { motion, useInView } from 'framer-motion';

function AboutCTA() {
  const sectionRef = React.useRef(null);

  // Detect when the section is in view
  const sectionInView = useInView(sectionRef, { once: false, margin: '-50px' });

  return (
    <div>
      <section ref={sectionRef} className="mt-16 text-center">
        {/* Animated Title */}
        <motion.h3
          className="text-3xl font-semibold mb-4 text-customPink"
          initial={{ opacity: 0, y: -20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Join Us for a Meal
        </motion.h3>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to experience the best of what we have to offer? Come visit us or make a reservation online!
        </motion.p>

        {/* Animated Button */}
        <motion.a
          href="#"
          className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-500 transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Make a Reservation
        </motion.a>
      </section>
    </div>
  );
}

export default AboutCTA;
