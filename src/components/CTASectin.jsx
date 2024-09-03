import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CTASection = () => {
    // Create a ref for the section to be observed
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 });

    return (
        <section
            ref={sectionRef}
            className="py-16 text-customPink"
        >
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                >
                    Ready to Taste the Best?
                </motion.h2>
                <motion.p
                    className="text-lg mb-10 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Join us for an unforgettable dining experience. Reserve your table or order online now!
                </motion.p>
                <div className="space-x-4">
                    <motion.a
                        href="#"
                        className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-400 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Reserve a Table
                    </motion.a>
                    <motion.a
                        href="#"
                        className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-400 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Order Online
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
