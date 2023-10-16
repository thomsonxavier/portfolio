import AboutSocials from "../components/AboutSocials";
import Hero from "../components/Hero"
import info from "../data/user";

function About() {
  return (
    <div  className="max-w-5xl mx-auto mt-10">
      <Hero
       title={info.about.title}
       description={info.about.description}
       socials={info.socials}
       email={info.main.email}
       type='about'
      />
    <div className="flex flex-col lg:flex-row justify-start px-5">
      <div className="flex items-center w-full lg:w-3/5"></div>
    <AboutSocials/>
    </div>

    </div>
  )
}

export default About