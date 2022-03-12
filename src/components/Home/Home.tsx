import React from 'react'
import { About } from '../About/About'
import { DarkModeButton } from '../DarkMode/DarkModeButton'
import { Experience } from '../Experience/Experience'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'
import { Testimonials } from '../Testimonials/Testimonials'

export const Home = () => {
  return (
    <>
      <DarkModeButton />
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Testimonials />
      <h2>Portfolio</h2>
      <Footer />
    </>
  )
}
