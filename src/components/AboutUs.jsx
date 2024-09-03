import React from 'react';
import { motion, useInView } from 'framer-motion';

function AboutUs() {
  // Create refs for each animated section
  const sectionRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const teamRef = React.useRef(null);

  // Using useInView to detect when each part is in view
  const sectionInView = useInView(sectionRef, { once: false, margin: '-50px' });
  const imageInView = useInView(imageRef, { once: false, margin: '-50px' });
  const contentInView = useInView(contentRef, { once: false, margin: '-50px' });
  const teamInView = useInView(teamRef, { once: false, margin: '-50px' });

  return (
    <div>
      <section id="about-us" className="py-20">
        <div className="container mx-auto px-4">
          {/* Animated Section Title */}
          <motion.h2
            ref={sectionRef}
            className="text-4xl font-bold text-center mb-8 text-customPink"
            initial={{ opacity: 0, y: -50 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center">
            {/* Animated Image */}
            <motion.div
              ref={imageRef}
              className="lg:w-1/2 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -100 }}
              animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://shorturl.at/DzWw0"
                alt="Restaurant Interior"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Animated Content */}
            <motion.div
              ref={contentRef}
              className="lg:w-1/2 lg:pl-8"
              initial={{ opacity: 0, x: 100 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
              <p className="mb-4">
                Welcome to [Your Restaurant Name], where culinary excellence meets exceptional service. Founded in [Year], our mission has always been to provide high-quality, delicious meals in a warm and welcoming atmosphere. Our team of passionate chefs and dedicated staff are committed to making every dining experience memorable.
              </p>
              <p className="mb-4">
                We take pride in using fresh, locally-sourced ingredients to create mouthwatering dishes that reflect our love for food and commitment to quality. From our family to yours, we invite you to join us and taste the difference.
              </p>

              {/* Animated Team Section */}
              <motion.h4
                ref={teamRef}
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Meet the Team
              </motion.h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { name: 'John Doe', role: 'Chef', imgSrc: 'https://shorturl.at/tMS8y' },
                  { name: 'Jane Smith', role: 'Manager', imgSrc: 'https://shorturl.at/pg3AZ' },
                ].map((member, index) => (
                  <motion.div
                    className="text-center"
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  >
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg"
                    />
                    <h5 className="text-xl font-semibold">{member.name}</h5>
                    <p>{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
