import React from 'react';
import { motion, useInView } from 'framer-motion';

function AboutValues() {
  const sectionRef = React.useRef(null);

  // Detect when the section is in view
  const sectionInView = useInView(sectionRef, { once: false, margin: '-50px' });

  return (
    <div>
      <section ref={sectionRef} className="mt-16">
        {/* Animated Section Title */}
        <motion.h3
          className="text-3xl font-semibold text-center mb-6 text-customPink"
          initial={{ opacity: 0, y: -30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Our Values
        </motion.h3>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are dedicated to providing the best experience by prioritizing quality, sustainability, and community. Our core values include:
        </motion.p>

        {/* Animated List */}
        <motion.ul
          className="list-disc list-inside mx-auto max-w-md text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            'Sourcing fresh, local ingredients',
            'Commitment to exceptional customer service',
            'Supporting local farmers and producers',
            'Maintaining a welcoming and inclusive environment',
          ].map((value, index) => (
            <motion.li
              key={index}
              className="mb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
            >
              {value}
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </div>
  );
}

export default AboutValues;
