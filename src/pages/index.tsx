import React from "react";
import Navbar from "@components/Navbar";
import JumboHome from "@components/JumboHome";
import Image from "next/image";
import PostList from "@components/PostList";

const JumboHomeContent = () => (
  <h1 className="text-white text-3xl leading-relaxed lg:text-left text-center">
    Hi 👋, I'm Saul Florez{" "}
    <a
      className="text-yellow-300 font-mono font-semibold"
      href=""
      target="_blank"
    >
      @sherzo
    </a>
    . I'm Egineer and Software Developer
  </h1>
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
      <PostList listTitle="Recently posted" />
    </>
  );
};

export default IndexPage;
