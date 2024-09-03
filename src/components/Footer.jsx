import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const footerVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, delay: 0.2 },
  },
};

const Footer = () => {
  // Create a reference to the footer for in-view detection
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  return (
    <motion.footer
      ref={ref}
      className="py-12"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={footerVariants}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <motion.h2
            className="text-3xl font-extrabold text-customPink"
            whileHover={{ scale: 1.1, color: '#FF69B4' }}
          >
            Foodie
          </motion.h2>
          <p className="text-gray-500 mt-2 text-lg">
            Discover and enjoy the best flavors from around the world.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 justify-center md:justify-start">
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon, index) => (
            <motion.a
              key={index}
              href={`https://www.${icon}.com`}
              className="text-gray-400"
              whileHover={{ scale: 1.2, color: '#FF69B4' }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={`fab fa-${icon} text-3xl`}></i>
            </motion.a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="text-center md:text-right">
          <motion.h3 className="text-xl font-semibold mb-4">
            Quick Links
          </motion.h3>
          <motion.ul className="space-y-2">
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: '#FF69B4' }}
                whileTap={{ scale: 0.9 }}
              >
                <a href={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-pink-400">
                  {link}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-12 border-t border-gray-700 pt-8">
        <div className="text-center">
          <motion.h3 className="text-xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </motion.h3>
          <form className="flex flex-col sm:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg border-2 border-gray-600 text-black focus:outline-none focus:border-customPink"
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 sm:ml-2 p-3 bg-customPink text-white rounded-lg border-2 border-customPink hover:bg-pink-600 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
          <motion.h3 className="text-xl font-semibold mb-4">
            Contact Us
          </motion.h3>
          <p className="text-gray-500">123 Foodie Street, Culinary City, CC 12345</p>
          <p className="text-gray-500 mt-2">Phone: (123) 456-7890</p>
          <p className="text-gray-500 mt-2">Email: info@foodie.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
