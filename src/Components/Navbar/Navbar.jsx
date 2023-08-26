import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div  >
      <ul className="fixed flex justify-start list-none space-x-5 text-lg text-neutral-800 bg-gray-100 bg-opacity-40 pt-6 pb-2 pl-10 w-full"
>
        <Link
          to="#home"
          smooth
          className="hover:text-neutral-600  hover:font-semibold"
        >
          Home
        </Link>
        <Link
          to="#projects"
          smooth
          className="hover:text-neutral-600 hover:font-semibold"
        >
          Projects
        </Link>
        <Link
          to="#skills"
          smooth
          className="hover:text-neutral-600 hover:font-semibold"
        >
          Skills
        </Link>
        <Link
          to="#contact"
          smooth
          className="hover:text-neutral-600 hover:font-semibold"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
