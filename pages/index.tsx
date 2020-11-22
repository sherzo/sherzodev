import React from "react";
import Navbar from "@components/Navbar";
import Image from "next/image";

const IndexPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600  to-blue-900 px-4 pt-4">
        <div className="max-w-3xl mx-auto">
          <Navbar />
          <div className="flex mt-2">
            <p className="text-white text-3xl mt-20 leading-relaxed md:w-4/6">
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
            <Image
              src="/sherzo-big-photo.png"
              alt="Sherzo Photo"
              width="400"
              height="400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
