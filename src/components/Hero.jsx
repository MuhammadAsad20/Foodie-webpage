import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext'; // Adjust the path to your ThemeContext

const HeroSection = () => {
    // Refs for tracking elements
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.5 });

    // Use Theme Context
    const { isDarkMode } = useTheme();

    // Animation variants for different elements
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
    };

    // Define background images for light and dark themes
    const backgroundImage = isDarkMode
        ? "url('https://rb.gy/xdxqyn')" // Dark theme image
        : "url('https://tinyurl.com/55s8nxnr')"; // Light theme image

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="relative text-white h-screen flex flex-col overflow-hidden bg-cover bg-center"
            style={{ backgroundImage }}
        >
            {/* Gradient overlay to improve text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

            <motion.div
                className="flex-grow flex flex-col justify-center items-center text-center px-4 z-10 relative"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <motion.h1
                    className="text-4xl sm:text-6xl font-bold mb-4 text-customPink"
                    variants={fadeIn}
                >
                    Delicious Meals Await
                </motion.h1>
                <motion.p className="text-lg sm:text-2xl mb-6" variants={fadeIn}>
                    Discover a world of flavors with our special recipes and meal plans.
                </motion.p>
                <motion.p className="text-lg sm:text-2xl mb-6" variants={fadeIn}>
                    Join our community and start your culinary adventure today!
                </motion.p>
                <motion.button
                    className="bg-customPink text-white py-2 px-6 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    variants={fadeIn}
                >
                    Get Started
                </motion.button>

                {/* Social Media Links with hover effects */}
                <motion.div className="mt-6 flex space-x-4" variants={fadeIn}>
                    {['Facebook', 'Twitter', 'Instagram'].map((platform, index) => (
                        <motion.a
                            key={index}
                            href={`https://${platform.toLowerCase()}.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-customPink text-white text-lg"
                            whileHover={{ scale: 1.1, color: '#FF69B4' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {platform}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
