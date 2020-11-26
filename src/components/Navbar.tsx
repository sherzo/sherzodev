import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex md:w-full lg:max-w-800 absolute top-6 left-0 right-0 m-auto lg:pl-0 pl-5">
      <div>
        <Link href="/">
          <a className="logo">Sherzo</a>
        </Link>
      </div>
      <ul className="md:flex items-center hidden">
        <li>
          <a href="#!" className="nav-item">
            Blog
          </a>
        </li>
        <li>
          <a href="#!" className="nav-item">
            About
          </a>
        </li>
        <li>
          <a href="#!" className="nav-item">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
