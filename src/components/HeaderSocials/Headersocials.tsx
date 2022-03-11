import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className="flex-col-cont-max gap-2">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/manuel-alejandro-ramírez"
        data-testid="linkedin-button"
      >
        <AiOutlineLinkedin />
      </a>
      <a target="_blank" href="https://github.com/alejodelosrios" data-testid="github-button">
        <BsGithub />
      </a>
    </div>
  )
}
