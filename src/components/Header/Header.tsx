import React from 'react'
import ME from '../../assets/perfil_manuel.png'
import { Cta } from '../Cta/Cta'

export const Header = () => {
  return (
    <header className="-poppins">
      <h5>Hello, I'm</h5>
      <h1 className="text-center" data-testid="h1-title">
        Manuel Alejandro
        <br />
        <span> Ramírez</span>
      </h1>
      <h5>FullStack Developer</h5>
      <Cta />
      <div>
        <img src={ME} alt="me" data-testid="profile-img" />
      </div>
      <a href="#contact">Scroll Down</a>
    </header>
  )
}
