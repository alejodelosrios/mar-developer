import { Contact } from '../Contact/Contact'
import { Experience } from '../Experience/Experience'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'
import { Portfolio } from '../Portfolio/Portfolio'
import { Testimonials } from '../Testimonials/Testimonials'

export const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
