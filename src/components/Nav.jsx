import { NavLink } from "react-router-dom";
import { navLinks } from "../const";
import { CgSun } from "react-icons/cg";
import { BsFillMoonStarsFill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function Nav({ toggleDarkMode, darkToggle }) {
  return (
    <div className='fixed top-0 lg:top-0 left-0  w-full bg-inherit  z-10 '>
      <nav className="flex justify-center  items-center p-4 ">
        <ul className="flex gap-5 shadow-md border mx-auto border-slate-200 px-2 lg:px-6 py-2 bg-white  rounded-full  dark:bg-black ">
          {navLinks.map((link, index) => (
            <li key={index} className=" text-xs">
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "text-green-500" : "")}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
          <button
        onClick={toggleDarkMode}
        className=" text-center flex w-full justify-center items-center "
      >
        {darkToggle ? <BsFillMoonStarsFill /> : <CgSun />}
      </button>
        </ul>
      </nav>
      
    </div>
  );
}

export default Nav;
