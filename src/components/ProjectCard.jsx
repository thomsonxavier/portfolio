
import { FaLink } from "react-icons/fa";
import info from "../data/user";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 py-10 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {info.projects.map((project, index) => (
        <div key={index} className=" rounded-lg  hover:bg-gray-100 transition-colors duration-300 ease-in-out">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="p-4">
              <div className="flex flex-col justify-between gap-y-5 mb-1">
                <img
                  src={project.logo}
                  alt="logo"
                  className="w-8 h-8 mr-2"
                />
                <div className="text-[#27272a] font-semibold text-lg">
                  {project.title}
                </div>
              </div>
              <div className="text-[#65656d] text-sm">
                {project.description}
              </div>
              <div className="flex items-center mt-3  text-sm">
                <div className="mr-2">
                  <FaLink className="text-[#65656d]" />
                </div>
                <a
                  href={project.link}
                  className="text-[#65656d] font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
