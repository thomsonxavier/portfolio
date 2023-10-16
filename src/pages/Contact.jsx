import info from '../data/user'
import Hero from '../components/Hero'
import AboutSocials from '../components/AboutSocials'

function Contact() {
  return (
    <div className='max-w-5xl mx-auto  mt-16'>
        <Hero
        title={info.contact.title}
        description={info.contact.description}
        
        type='contact'
        />

        <AboutSocials type='contact'/>
    </div>
  )
}

export default Contact