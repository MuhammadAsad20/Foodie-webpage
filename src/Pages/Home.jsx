import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/Hero'
import Special from '../components/Special'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import CTASection from '../components/CTASectin'
import BlogSection from '../components/Blog'

function Home() {
  return (
    <div>
        <Header/>
        <section id="home" className="">
        <HeroSection/>
        <Special/>
        <CTASection/>
        <BlogSection/>
        <Testimonials/>
        <Footer/>
        </section>
    </div>
  )
}

export default Home