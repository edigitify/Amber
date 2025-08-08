import React from "react";
import OfficeImage from "../../assets/3.png"; 

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Rooted in a passion for design and driven by innovation,
            <strong className="font-semibold"> Amber Glass India </strong>
            offers a curated range of premium glass films crafted to elevate
            interiors with elegance and functionality. Whether it's for homes,
            workspaces, studios, or events, our films strike the perfect balance
            between privacy, aesthetics, and performance.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Proudly made in India, we collaborate with architects, designers, and
            space stylists to deliver glass solutions that are modern, modular,
            and deeply personal.
          </p>

          <button className="bg-slate-500 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-slate-600 transition duration-300">
            DISCOVER MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={OfficeImage}
            alt="Office view"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
