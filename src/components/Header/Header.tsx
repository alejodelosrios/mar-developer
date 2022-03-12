import React from 'react'
import ME from '../../assets/perfil_manuel.png'
import { Cta } from '../Cta/Cta'
import { HeaderSocials } from '../HeaderSocials/Headersocials'

export const Header = () => {
  return (
    <header className="mx-4 md:mx-0 h-screen  pt-28 md:pt-40 overflow-hidden text-center relative">
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
        className="bg-gradient-to-br from-primary to-transparent absolute bottom-0 left-1/2 -translate-x-2/4 w-[17rem] h-[22rem] sm:w-[20rem] sm:h-[26rem] md:w-[24rem] md:h-[30rem] lg:w-[30rem] lg:h-[34rem] xl:w-[34rem] xl:h-[36rem] rounded-t-full mt-4 pt-4"
        src={ME}
        alt="me"
        data-testid="profile-img"
      />
      <a className="absolute -right-8 bottom-20 text-sm rotate-90 font-extralight" href="#contact">
        Scroll Down
      </a>
    </header>
  )
}
