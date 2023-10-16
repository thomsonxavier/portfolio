import { navLinks } from "../const";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="border-t-2 border-[f4f4f5] py-4">
        <div className="container mx-auto">
          <ul className="flex text-sm flex-col md:flex-row md:items-center justify-start gap-4 md:gap-10 p-3">
            {navLinks.map((link, index) => (
              <li key={index} className="">
                <Link to={link.path} className=" hover:text-green-500">
                  {link.title}
                </Link>
              </li>
            ))}
            <p className="font-light ml-auto text-sm text-center md:text-end">
              Dev By <span className="text-blue-500">Thomson</span> © 2023
              Copyright
            </p>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
