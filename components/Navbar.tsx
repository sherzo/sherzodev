import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center">
        <li>
          <Link href="/">
            <a className="text-white py-1 text-xl mr-24">Sherzo</a>
          </Link>
        </li>
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