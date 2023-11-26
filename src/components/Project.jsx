import React from 'react';
import Cards from './Cards';
import Data from './ProjectData';


const Project = () => {
 return (
    <section  id="project">
      <div className="lg:mx-20 md:mx-8 p-10">
        <h1 className="text-blue-700 text-left font-semibold text-xl md:text-2xl">
          PROJECTS 🧑‍💻
         </h1>
        <h2 className="text-left font-bold text-gray-900 text-3xl mt-4">
          Each project is a unique piece of development 🧩
        </h2>
      </div>
      <div className="lg:mx-20 md:mx-8 p-4">
        <Cards Data = {Data}/>
      </div>
    </section>
 );
};

export default Project;