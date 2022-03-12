import React from 'react'
import CV from '../../assets/cv.pdf'

export const Cta = () => {
  return (
    <div className="flex-cont-full justify-center gap-4 mt-10">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn-secondary" href="#contact">
        Let's Talk
      </a>
    </div>
  )
}
