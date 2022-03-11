import React from 'react'
import CV from '../../assets/cv.pdf'

export const Cta = () => {
  return (
    <div className="flex-cont-max gap-4">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn-secondary" href="#contact">
        Let's Talk
      </a>
    </div>
  )
}
