import React from 'react'
import ME from '../../assets/perfil_manuel_fondo.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { FiUsers } from 'react-icons/fi'
import { SectionTitle } from '../SectionTitle/SectionTitle'

export const About = () => {
  return (
    <section id="about" className="mx-4 md:mx-6">
      <SectionTitle title="About" subtitle="Get To Know" />
      <div className="grid grid-cols-1 gap-8 place-items-center place-content-center md:grid-cols-2">
        <div className="flex-cont-full justify-center">
          <div className="grid place-items-center w-[60%] md:w-3/4 rounded-[2rem] aspect-square bg-gradient-to-br from-primary to-transparent">
            <img
              className="w-full aspect-square rounded-[2rem] overflow-hidden rotate-[10deg] hover:rotate-0 transition duration-500"
              data-testid="about-img"
              src={ME}
              alt="about-img"
            />
          </div>
        </div>
        <div className="flex-col-cont-full items-center  gap-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-8">
            <article className="about-card" data-testid="experienceCardId">
              <FaAward className="text-cgray" data-testid="cardIconId" />
              <h5>Experience</h5>
              <small data-testid="cardSmallId">2+ Years working</small>
            </article>
            <article className="about-card" data-testid="clientsCardId">
              <FiUsers data-testid="cardIconId" />
              <h5>Clients</h5>
              <small data-testid="cardSmallId">10+ Clients</small>
            </article>
            <article className="about-card " data-testid="projectsCardId">
              <VscFolderLibrary data-testid="cardIconId" />
              <h5>Projects</h5>
              <small data-testid="cardSmallId">10+ Completed</small>
            </article>
          </div>
          <p data-testid="paragraphId">
            Ipsum consequuntur numquam molestiae cum doloribus, ut illo velit, quo laudantium Ipsam
            quibusdam molestias excepturi dicta laudantium Veritatis perferendis aliquid quisquam
            voluptatum quam unde Eligendi nihil quaerat magni tenetur sed?
          </p>
          <a className="btn self-start" href="#contact">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
