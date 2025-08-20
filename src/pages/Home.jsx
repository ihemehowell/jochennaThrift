import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts'
import ProductShowcase from '../components/ProductShowcase'
import Testimonials from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import WithSpinner from '../components/WithSpinner';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts />
      <ProductShowcase />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
export default WithSpinner(Home);
