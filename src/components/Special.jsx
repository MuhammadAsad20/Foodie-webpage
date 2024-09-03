import React from 'react';
import { motion, useInView } from 'framer-motion';

const specials = [
    {
        name: 'Signature Burger',
        description: 'Juicy beef patty with cheese, lettuce, and our special sauce.',
        image: 'https://shorturl.at/QV3P8',
    },
    {
        name: 'Spaghetti Carbonara',
        description: 'Creamy pasta with pancetta, Parmesan, and black pepper.',
        image: 'https://shorturl.at/ac7Y2',
    },
    {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
        image: 'https://shorturl.at/NWhT5',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

function Special() {
    // Create a reference to the section
    const sectionRef = React.useRef(null);

    // Use the useInView hook to trigger animations when in view
    const isInView = useInView(sectionRef, { once: false, margin: '0px 0px -100px 0px' });

    return (
        <section id="specials" ref={sectionRef} className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 text-customPink">Specials</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {specials.map((special, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="w-full sm:w-80 rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={special.image}
                                alt={special.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{special.name}</h3>
                                <p className="text-gray-400">{special.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Special;
