import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Logos from "./Import";

/**
 * HeroicSection component renders a section with information about a front-end developer.
 * The component includes an image, a header, a paragraph, and social media links.
 * It also displays a section with the developer's tech stack.
 */
function HeroicSection() {
  return (
    <div className="lg:mx-20 md:mx-8">
      {/* Header */}
      <header className="w-auto my-32 h-60 md:flex md:justify-between p-10">
        {/* Image part */}
        <img
          src={Logos.herosection.man}
          alt="man"
          className="lg:h-80 lg:w-80 md:h-60 md:w-60 h-fit w-screen md:order-2 order-1" />
        <section className="md:order-1 order-2">
          {/* Title */}
          <h1 className="text-[#2d2e32] md:text-6xl text-5xl font-extrabold lg:max-w-md md:w-4/5 lg:w-fit mr-5">
            Front-End React Developer 👋🏼
          </h1>
          {/* Description */}
          <p className="text-gray-800 mt-4 mb-8 max-w-md lg:w-fit lg:max-w-md mr-5">
            Hi, I'm Prince Rai. A passionate Front-End Developer based in Kanpur, India.📍
          </p>

          {/* Social media links */}
          <div className="inline-flex">
            <a
              className="text-3xl mr-2"
              href="https://www.linkedin.com/in/prince-rai-6b836b229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              className="text-3xl ml-2"
              href="https://github.com/PrinceRai1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub></FaGithub>
            </a>
          </div>

          {/* Tech stack */}
          <div className="font-medium text-gray-900 my-8 md:flex justify-center sm:max-w-lg">
            <p className="mt-2 text-lg md:mr-10 min-w-fit font-semibold text-center">
              Tech Stack
            </p>
            <div className="flex jusity-center gap-2 flex-wrap">
              <img src={Logos.skill.html} alt="HTML" className="w-12 h-12" />
              <img src={Logos.skill.css} alt="CSS" className="w-12 h-12" />
              <img src={Logos.skill.tailwind} alt="Tailwind CSS" className="w-12 h-12" />
              <img src={Logos.skill.javascript} alt="JavaScript" className="w-12 h-12" />
              <img src={Logos.skill.react} alt="React" width={50} className="w-12 h-12" />
            </div>
          </div>
        </section>
      </header>
      <br />
    </div>
  );
}

export default HeroicSection;
