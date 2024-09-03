import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'John Doe',
        feedback: 'Great food and excellent service! Highly recommend.',
        image: 'https://via.placeholder.com/100',
    },
    {
        name: 'Jane Smith',
        feedback: 'A wonderful dining experience with a cozy ambiance.',
        image: 'https://via.placeholder.com/100',
    },
    {
        name: 'Emily Johnson',
        feedback: 'The dishes were absolutely delicious, and the staff was very friendly.',
        image: 'https://via.placeholder.com/100',
    },
];

const transitionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="bg-gray-800 text-white py-6 relative overflow-hidden ">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 text-customPink">Testimonials</h2>
                <div className="relative w-full max-w-3xl mx-auto h-[260px]">
                    <AnimatePresence mode='wait'>
                        {testimonials.map((testimonial, i) => (
                            i === index && (
                                <motion.div
                                    key={i}
                                    variants={transitionVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 text-center p-8 rounded-lg shadow-lg bg-gray-900 bg-opacity-75"
                                >
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-20 h-20 rounded-full mx-auto mb-4"
                                    />
                                    <p className="text-lg mb-4 italic">&ldquo;{testimonial.feedback}&rdquo;</p>
                                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
            <motion.div
                className="absolute inset-0 z-0"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 10, loop: Infinity }}
                style={{
                    background: 'linear-gradient(120deg, #f093fb 0%, #fff76c 100%)',
                }}
            ></motion.div>
        </section>
    );
}

export default Testimonials;
