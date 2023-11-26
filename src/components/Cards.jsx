import React from "react";

const Cards = ({Data}) => {
  return (
    <>{Data.map((data) =>
    <figure className="relative w-auto flex flex-wrap md:flex-nowrap mt-16 drop-shadow-sm shadow-[#1d293d] rounded-xl gap-2 justify-between bg-[#f2e769] bg-clip-border text-gray-700 shadow-md">
      <div className="relative w-screen md:w-2/5 mx-4 -mt-6 h-48 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600"></div>
      <div className="p-6 md:w-3/5">
        <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-gray-900 antialiased">
          {data.name}
        </h5>
        <p className="block text-gray-800 antialiased">{data.description}</p>
        <div className="py-6 flex gap-3">
          <a href={data.live} target="blank" class="cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]">
            Live Demo
          </a>
          <a href={data.code} target="blank" class="cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]">
            Code
          </a>
        </div>
      </div>
    </figure>)}</>
  );
};

export default Cards;
