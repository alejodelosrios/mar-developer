import React, { useState } from 'react'
import { RiHome6Line } from 'react-icons/ri'
import { RiUserSmileLine } from 'react-icons/ri'
import { BiBook } from 'react-icons/bi'
import { RiSuitcase3Line } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState<string>('#home')
  const navigate = useNavigate()
  const goToAbout = () => {
    setActiveNav('#about')
    navigate('/about')
  }
  return (
    <nav className="fixed z-10 justify-center py-3 text-white bg-black rounded-full opacity-30 px-7 left-1/2 -translate-x-2/4 bottom-8 flex-cont-max gap-4">
      <a className={activeNav === '#home' ? 'active' : ''} data-testid="homeId" href="#home">
        <RiHome6Line />
      </a>
      <div
        id="about-link"
        className={activeNav === '#about' ? 'active' : ''}
        data-testid="aboutId"
        onClick={() => goToAbout()}
      >
        <RiUserSmileLine />
      </div>
      <a
        className={activeNav === '#portfolio' ? 'active' : ''}
        data-testid="portfolioId"
        onClick={() => setActiveNav('#portfolio')}
        href="#portfolio"
      >
        <BiBook />
      </a>
      <a
        className={activeNav === '#experience' ? 'active' : ''}
        data-testid="experienceId"
        onClick={() => setActiveNav('#experience')}
        href="#experience"
      >
        <RiSuitcase3Line />
      </a>
      <a
        className={activeNav === '#contact' ? 'active' : ''}
        data-testid="contactId"
        onClick={() => setActiveNav('#contact')}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}
