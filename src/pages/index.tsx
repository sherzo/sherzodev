import React from "react";
import Navbar from "@components/Navbar";
import JumboHome from "@components/JumboHome";
import Image from "next/image";

const JumboHomeContent = () => (
  <>
    Hi 👋, I'm Saul Florez{" "}
    <a
      className="text-yellow-300 font-mono font-semibold"
      href=""
      target="_blank"
    >
      @sherzo
    </a>
    . I'm Egineer and Software Developer
  </>
);

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <JumboHome
        content={<JumboHomeContent />}
        responsiveImg={
          <Image
            src="/sherzo-big-photo.png"
            alt="Sherzo Photo"
            width="160"
            height="160"
          />
        }
        image={
          <Image
            src="/sherzo-big-photo.png"
            alt="Sherzo Photo"
            width="400"
            height="400"
          />
        }
      />
    </>
  );
};

export default IndexPage;
