// Hero.js
import bg from "../assets/bg2.jpg";
import pdf from '../assets/thomson xavier.pdf'
import {
  
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import {FaRegFilePdf} from 'react-icons/fa'
import { FiMail } from "react-icons/fi";

function Hero({ type, title, description, socials, email }) {
  return (
    <section>
      <div className="flex  flex-col-reverse px-5  md:flex-row py-10">
        <div className={`w-full  ${
               type === "project" || type === 'blog' ? " md:w-11/12" : "md:w-3/5"
              } `}>
          <div className="px-4">
            <h2 className="font-bold text-3xl w-full md:text-3xl lg:text-4xl lg:w-[85%]">
              {title}
            </h2>
            <p
              className={`pt-10 w-full  leading-7 text-[#65656d] ${
                type === "project" ? "md:full  " : "md:w-4/5"
              }`}
            >
              {description}
            </p>

            {type === "home" && (
              <div className="flex gap-6 py-5 text-2xl  text-[#65656d]">
                 <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                  <FiMail className="hover:text-black dark:hover:text-white" />
                </a>
               
                <a href={socials.github} target="_blank" rel="noreferrer">
                  <AiFillGithub className="hover:text-black dark:hover:text-white" />
                </a>
                
                <a href={socials.instagram} target="_blank" rel="noreferrer">
                  <AiFillInstagram className="hover:text-black dark:hover:text-white" />
                </a>
                <a href={pdf} target="_blank" rel="noreferrer" download className="group relative">
  <FaRegFilePdf className="text-blue-500 group-hover:animate-pulse animate-bounce hover:text-black dark:hover:text-white" />
</a>


              </div>
            )}
          </div>
        </div>
        {type !== "project" && type !== 'blog' && type !== 'contact'  ? (
  <div className={` ${type === 'contact' ? 'hidden' : 'w-2/5'}`}>
    <div className={`w-64 h-64 md:w-96 md:h-96 mb-5 md:mb-0 rotate-6 ${type === 'about' ? 'mt-10' : ''}`}>
  <img src={bg} alt="about" className="rounded-3xl ml-5 lg:ml-1 filter drop-shadow-lg dark:grayscale dark:ring-1 dark:ring-offset-2" />
</div>

  </div>
) : (
  ""
)}

      </div>
    </section>
  );
}

export default Hero;
