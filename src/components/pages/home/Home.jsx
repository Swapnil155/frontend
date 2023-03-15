import React from 'react'
import Blog from './components/Blog'
import Header from './components/Header'
import './home.css'
import PopularTour from './components/PopularTour'
import Purpose from './components/Purpose'
import Testimonial from './components/Testimonial'
import Trending from './components/Trending'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Trending />
      <Purpose />
      <PopularTour />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
