import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BlogSection = () => {
  // Create a reference to the section
  const sectionRef = useRef(null);

  // Use the useInView hook to trigger animations when in view
  const isInView = useInView(sectionRef, { once: false, margin: '-50px' });

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-8">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0.2, 0.4, 0.6].map((delay, i) => (
            <motion.div
              key={i}
              className="bg-gray-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay }}
            >
              <h3 className="text-2xl font-bold mb-4 text-pink-500">Blog Post Title</h3>
              <p className="text-gray-700 mb-4">
                Brief excerpt from the blog post. Tease the reader with a compelling intro.
              </p>
              <a href="#" className="text-pink-600 font-semibold hover:underline">Read More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
