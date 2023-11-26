import React from "react";
import Logos from "./Import";
import Animation from "./Animation";
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
} from "react-icons/bs";

const About = () => {
  return (
    <article className="lg:mx-20 md:mx-8 w-fit h-fit">
      <section className="md:flex justify-evenly" id="about">
        <div className="mx-4 mt-52">
          <img
            src={Logos.about}
            alt=""
            className="shadow-lg shadow-blue-700 md:max-w-[350px] border rounded-lg opacity-0 md:opacity-100"
          />
          <Animation />
        </div>
        <div className="mt-32 p-8">
          <br />
          <br />
          <h1 className="text-blue-700 text-left font-semibold text-xl">
            About Me
          </h1>
          <h2 className="text-left font-bold text-gray-900 text-3xl lg:max-w-md md:w-4/5 lg:w-fit">
            A passionate Front-End Developer based in Kanpur, India📍
          </h2>
          <p className="text-gray-800 lg:w-4/5 w-fit text-justify">
            As a Junior Front-End Developer, I possess as impressive arsenat of
            skills in HTML,CSS,Javascript,Tailwind and React.I excel in
            desigining and mainytaining responsive website that after a smooth
            user experience.My expertise lies in crafting dynamic,engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques.I am also a team
            player who thrives in collaborating with cross functional teams to
            produce outstanding web applications
          </p>
        </div>
      </section>
      <section className="mx-4 my-16 p-2">
        <h1 className="text-blue-700 text-left font-semibold text-xl uppercase">
          My Approach to work
        </h1>
        <h2 className="text-left font-bold text-gray-900 text-3xl">
          Every project is important to me🎈
        </h2>
        <div className="w-full h-fit text-gray-900 p-4 border-[#f2e769] rounded-lg">
          <ol className="text-gray-800 uppercase text-justify text-base md:text-lg grid grid-cols-1 md:grid-cols-4">
            <div className="md:col-start-1 md:col-span-2 m-4 p-3 rounded-md bg-[#ddd57e] float-left shadow-xl shadow-blue-600">
              <BsFill1CircleFill className="disply-inline text-xl mx-[48%] mb-2 text-blue-600" />
              <li>
                Every project is important for me and i always go above and
                beyound to exceed your expectations
              </li>
            </div>
            <div className="md:col-start-2 md:col-span-2 m-4 p-3 rounded-md bg-[#ddd57e] float-right shadow-xl shadow-blue-600">
              <BsFill2CircleFill className="disply-inline text-xl mx-[48%] mb-2 text-blue-600" />
              <li>
                I enjoy coming up with creative ideasto stay one step ahead to
                the competitors
              </li>
            </div>
            <div className="md:col-start-1 md:col-span-2 m-4 p-3 rounded-md bg-[#ddd57e] float-left shadow-xl shadow-blue-600">
              <BsFill3CircleFill className="disply-inline text-xl mx-[48%] mb-2 text-blue-600" />
              <li>
                Respect and communicationare the most important components of
                fruitful collaboration{" "}
              </li>
            </div>
            <div className="md:col-start-2 md:col-span-2 m-4 p-3 rounded-md bg-[#ddd57e] float-right shadow-xl shadow-blue-600">
              <BsFill4CircleFill className="disply-inline text-xl mx-[48%] mb-2 text-blue-600" />
              <li>
                I Approach every project with a positive attitude and a desire
                to learn
              </li>
            </div>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default About;
