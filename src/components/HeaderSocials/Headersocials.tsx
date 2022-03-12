import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className="flex-col-cont-max gap-2 absolute left-0 bottom-12 after:content-[''] after:w-px after:h-8 after:bg-dark after:self-center">
      <a
        className="text-dark  hover:text-primary transition-all duration-300 rounded-full bg-primary p-2"
        target="_blank"
        href="https://www.linkedin.com/in/manuel-alejandro-ramírez"
        data-testid="linkedin-button"
      >
        <AiOutlineLinkedin />
      </a>
      <a
        className="text-dark  hover:text-primary transition-all duration-300 rounded-full bg-primary p-2"
        target="_blank"
        href="https://github.com/alejodelosrios"
        data-testid="github-button"
      >
        <BsGithub />
      </a>
    </div>
  )
}
