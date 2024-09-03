import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';
import ContactMap from '../components/ContactMap';
import SocialMediaLinks from '../components/SocialMediaLinks';
import Header from '../components/Header';

const Contact = () => {
  return (
    <>
    <Header />
    <section id="contact-us" className="py-40">
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-customPink">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <div className="space-y-8">
            <ContactDetails />
            <ContactMap />
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
