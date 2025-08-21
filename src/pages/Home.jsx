import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts'
import ProductShowcase from '../components/ProductShowcase'
import PromoBanner from '../components/PromoBanner'
import Testimonials from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import WithSpinner from '../components/WithSpinner';

const Home = () => {
  return (
    <div>
      <HeroSection/> 
      <FeaturedProducts />
      <ProductShowcase />
      <PromoBanner />          
      <Testimonials />
      <Newsletter />              
    </div>
  )
}

// Wrap it here instead of inline export
const HomeWithSpinner = WithSpinner(Home);

export default HomeWithSpinner;

