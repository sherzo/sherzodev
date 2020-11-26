import React, { ReactNode } from "react";

type JumboHomeProps = {
  responsiveImg: ReactNode;
  content: ReactNode | string;
  image: ReactNode;
};

export default function JumboHome({
  responsiveImg,
  content,
  image,
}: JumboHomeProps) {
  return (
    <section className="w-full bg-gradient-to-r from-blue-700 to-blue-900 px-4 pt-6">
      <div className="mx-auto md:w-full lg:max-w-800 mt-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:hidden my-6 rounded-full border self-center overflow-hidden bg-yellow-300 w-28 h-28">
            {responsiveImg}
          </div>
          <div className="text-white text-3xl md:mt-20 md:w-4/6 mb-5">
            {content}
          </div>
          <div className="md:block hidden mt-1 -mb-1.5 overflow-hidden">
            {image}
          </div>
        </div>
      </div>
    </section>
  );
}
