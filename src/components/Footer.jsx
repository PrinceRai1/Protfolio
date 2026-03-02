import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiMapAlt, BiMailSend } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-20" id="contact">
      <section className="lg:mx-48 mx-20">
        <h1 className="text-blue-700 text-left font-semibold text-xl">
          Contact
        </h1>
        <h2 className="text-left font-bold text-gray-900 text-3xl">
          Don't be shy! Hit me up! 👇
        </h2>
        <div className="mt-14 md:flex block justify-between w-[60%] mb-10">
          <div className="flex min-w-fit">
            <BiMapAlt className="text-blue-700 text-lg border-none w-16 h-16 p-4"/>
            <span>
              <p className="text-2xl text-gray-900">Location</p>
              <p className="text-gray-800">Kanpur,Uttar-Pradesh,India</p>
            </span>
          </div>
          <div className="flex min-w-fit">
            <BiMailSend className="text-blue-700 text-lg border-none w-16 h-16 p-4"/>
            <span>
              <p className="text-2xl text-gray-900">Mail</p>
              <p className="text-gray-800 hover:text-blue-700"><a href="mailto:pr4298617@gmail.com">pr4298617@gmail.com</a></p>
            </span>
          </div>
        </div>
      </section>
      {/* dark section */}
      <section className="bg-gradient-to-r from-[#9b8073] via-[#c73e61] to-[#041a67] h-full">
        <div className="md:flex block justify-between items-center mx-10 md:mx-20 p-4">
          <p className="text-white md:text-xl">
            Copyright © 2023. All rights are reserved
          </p>
          <div className="flex items-center md:py-16 p-4">
            <a
              className="text-3xl mr-2"
              href="https://www.linkedin.com/in/prince-rai-6b836b229/" target="_blank">
              <FaLinkedin className="text-white "></FaLinkedin>
            </a>
            <a className="text-3xl ml-2" href="https://github.com/PrinceRai1" target="_blank">
              <FaGithub className="text-white"></FaGithub>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
