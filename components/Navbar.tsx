import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex md:w-full lg:w-800 absolute top-6 left-0 right-0 m-auto md:pl-0 pl-5">
      <div>
        <Link href="/">
          <a className="text-white py-1 text-xl mr-24">Sherzo</a>
        </Link>
      </div>
      <ul className="md:flex items-center hidden">
        <li>
          <a
            href="#!"
            className="text-white py-1 px-3 mx-6 hover:bg-blue-600 rounded transition duration-500"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#!"
            className="text-white py-1 px-3 mx-6 hover:bg-blue-600 rounded transition duration-500"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#!"
            className="text-white py-1 px-3 mx-6 hover:bg-blue-600 rounded transition duration-500"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
