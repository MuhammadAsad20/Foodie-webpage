import React from 'react'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import AboutCustomer from '../components/AboutCustomer'
import AboutValues from '../components/AboutValues'
import AboutCTA from '../components/AboutCTA'

function About() {
  return (
    <div className="">
    <Header />
    <main>
      <section id="about-us" className="py-28">
        <div className="container mx-auto px-4">
          <AboutUs />
          <AboutValues />
          <AboutCustomer />
          <AboutCTA />
        </div>
      </section>
    </main>
  </div>
);
  
}

export default About