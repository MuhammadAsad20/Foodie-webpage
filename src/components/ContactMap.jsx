import React from 'react';
import { motion, useInView } from 'framer-motion';

const ContactMap = () => {
  // Create a reference to the map for in-view detection
  const mapRef = React.useRef(null);
  const isInView = useInView(mapRef, { once: false, margin: '-50px' });

  return (
    <motion.div
      ref={mapRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-3xl font-semibold mb-4">Our Location</h3>
      <div className="w-full h-64 bg-gray-700 rounded-lg shadow-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509364!2d144.9537353153217!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f29f9999%3A0x5045675218ce7e33!2sVictoria%20Harbour!5e0!3m2!1sen!2sau!4v1634276032752!5m2!1sen!2sau"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </motion.div>
  );
}

export default ContactMap;
