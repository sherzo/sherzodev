import React from "react";
import Navbar from "@components/Navbar";
import Image from "next/image";

const IndexPage = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-700 to-blue-900 px-4 pt-6">
      <div className="mx-auto md:w-full lg:w-800">
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <div className="md:hidden my-6 rounded-full border self-center overflow-hidden bg-yellow-300 w-28 h-28">
            <Image
              src="/sherzo-big-photo.png"
              alt="Sherzo Photo"
              width="180"
              height="180"
            />
          </div>
          <p className="text-white text-3xl md:mt-20 leading-relaxed md:w-4/6 mb-5 lg:text-left text-center">
            Hi 👋, I'm Saul Florez{" "}
            <a
              className="text-yellow-300 font-mono font-semibold"
              href="https://github.com/sherzo"
              target="_blank"
            >
              @sherzo
            </a>
            . I'm Egineer and Software Developer
          </p>
          <div className="md:block hidden mt-1 -mb-1.5 overflow-hidden">
            <Image
              src="/sherzo-big-photo.png"
              alt="Sherzo Photo"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
