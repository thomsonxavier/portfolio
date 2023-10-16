
import Hero from "../components/Hero"
import info from "../data/user";
import HomepageArticles from "../components/HomepageArticles"
import SkillBar from "../components/SkilBar"
import Tabs from "../components/Tabs"
import Work from "../components/Work"
import Logo from "../components/Logo";


function Home() {
  return (
    <div className=" max-w-5xl mx-auto  mt-16">
      <Logo/>
      <Hero
        title={info.homepage.title}
        description={info.homepage.description}
        socials={info.socials}
        email={info.main.email}
        type='home'
      />
<div>
      <SkillBar/>
</div>

       <Tabs/>
       <div className="flex flex-col-reverse md:flex-row">
        <HomepageArticles/>
        <Work/>
       
       </div>
       
    </div>
  )
}

export default Home