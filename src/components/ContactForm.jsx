import React from 'react';
import { motion, useInView } from 'framer-motion';

const ContactForm = () => {
  // Create a reference to the section for in-view detection
  const formRef = React.useRef(null);
  const isInView = useInView(formRef, { once: false, margin: '-50px' });

  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">Your Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Your Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Your Message</label>
          <textarea
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none"
            placeholder="Enter your message"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-customPink text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-500 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};
