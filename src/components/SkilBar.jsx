
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs} from 'react-icons/tb';
import {
  SiTailwindcss,
  SiFirebase,
  SiBootstrap,
  SiRedux,
  SiExpress,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={50} color="#E34F26" /> },
  { name: 'CSS', icon: <FaCss3 size={50} color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs size={50} color="#F0DB4F" /> },
  { name: 'React', icon: <FaReact size={50} color="#61DAFB" /> },
  { name: 'Next', icon: <TbBrandNextjs size={50} color="#0070F3" /> },
  { name: 'Tailwindcss', icon: <SiTailwindcss size={50} color="#38B2AC" /> },
  { name: 'Redux', icon: <SiRedux size={50} color="#764ABC" /> },
  { name: 'Bootstrap', icon: <SiBootstrap size={50} color="#7952B3" /> },
  { name: 'Firebase', icon: <SiFirebase size={50} color="#FFCA28" /> },
  { name: 'Nodejs', icon: <FaNodeJs size={50} color="#8CC84B" /> },
  { name: 'Express', icon: <SiExpress size={50} color="#000000" /> },
];

const SkillBar = () => {
  return (
    <div className="skills-box p-4">
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-[#65656d]">Skills</h2>
      <div className="skills-icons grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill  group relative animated-feature-cards hover:bg-gradient-to-b hover:from-primary-400 hover:to-primary-500 hover:dark:from-primary-800 hover:dark:to-primary-700"
          >
              <div className='animated-feature-cards relative w-full drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)]"
            style={{ "--x": "279px", "--y": "312.59375px" }}'>

              <div className="group relative h-full w-full overflow-hidden p-8 rounded-lg border bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 md:hover:border-transparent lg:bg-gradient-to-br">
          
              <span className='text-center flex justify-center'>{skill.icon}</span>
            <p className="font-bold mt-2 text-center text-[#65656d]">{skill.name}</p>
              </div>

              </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBar;
