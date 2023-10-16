import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard";
import info from "../data/user";

function Project() {
  return (
    <div className="max-w-5xl mx-auto  mt-16" >
          <Hero
       title={info.projectsec.title}
       description={info.projectsec.description}
       
       type='project'
      />
      <div className="p-2 md:p-0">
        <ProjectCard/>
        </div>
    </div>
  )
}

export default Project