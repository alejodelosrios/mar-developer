import React from 'react'
import ME from '../../assets/perfil_manuel.png'
import { Cta } from '../Cta/Cta'
import { HeaderSocials } from '../HeaderSocials/Headersocials'

export const Header = () => {
  return (
    <header
      id="home"
      className="relative h-screen mx-4 overflow-hidden text-center md:mx-6 pt-28 md:pt-28 lg:pt-30 xl:pt-32"
    >
      <h5>Hello, I'm</h5>
      <h1 className="text-center md:text-6xl" data-testid="h1-title">
        Manuel Alejandro
        <br />
        <span> Ramírez</span>
      </h1>
      <h5>FullStack Developer</h5>
      <Cta />
      <HeaderSocials />
      <img
        className="bg-gradient-to-br from-primary to-transparent absolute bottom-0 left-1/2 -translate-x-2/4 w-[17rem] h-[22rem] sm:w-[20rem] sm:h-[26rem] md:w-[20rem] md:h-[24rem] lg:w-[28rem] lg:h-[30rem] xl:h-[28rem] rounded-t-full mt-4 pt-4"
        src={ME}
        alt="me"
        data-testid="profile-img"
      />
      <a className="absolute text-sm -right-8 bottom-20 rotate-90 font-extralight" href="#contact">
        Scroll Down
      </a>
    </header>
  )
}
