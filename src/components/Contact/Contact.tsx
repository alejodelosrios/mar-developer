import { ContactCard } from './ContactCard/ContactCard'
import Email from '../../assets/icons/mail-outline.svg'
import Whatsapp from '../../assets/icons/logo-whatsapp.svg'
import { SectionTitle } from '../SectionTitle/SectionTitle'

export const Contact = () => {
  return (
    <section
      className="mx-4 md:mx-0 flex flex-col items-center mt-32"
      data-testid="contact-section"
      id="contact"
    >
      <SectionTitle title="Contact Me" subtitle="Get in Touch" />
      <div className="flex flex-col md:flex-row w-[80%]">
        <div className="flex flex-col justify-evenly items-center gap-4 w-full md:w-1/3 order-2 md:order-1">
          <ContactCard
            title="Email"
            subtitle="ramalejandro@gmail.com"
            link="mailto:ramalejandro@gmail.com"
            linkName="Send a message"
            logo={Email}
          />
          <ContactCard
            title="Whatsapp"
            subtitle="+52 5544035909"
            link="https://api.whatsapp.com/send?phone=+525544035909"
            linkName="Send a message"
            logo={Whatsapp}
          />
        </div>
        <form
          action=""
          data-testid="contact-form"
          className="flex flex-col items-center w-full md:w-2/3 md:pl-12 gap-4 order-1 md:order-2"
        >
          <input
            type="text"
            name="text"
            placeholder="Your Full Name"
            required
            className="w-3/4 form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-3/4 form-input"
          />
          <textarea
            id=""
            name=""
            rows={7}
            placeholder="Your Message"
            required
            className="w-3/4 form-input"
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
