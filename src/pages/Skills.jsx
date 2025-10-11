import React from 'react';

const Skills = () => {
  return (
    <div className="bg-black/50 w-11/12 h-screen text-white flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-800 p-4 rounded-lg">React</div>
          <div className="bg-gray-800 p-4 rounded-lg">JavaScript</div>
          <div className="bg-gray-800 p-4 rounded-lg">Node.js</div>
          <div className="bg-gray-800 p-4 rounded-lg">Python</div>
          <div className="bg-gray-800 p-4 rounded-lg">MongoDB</div>
          <div className="bg-gray-800 p-4 rounded-lg">Tailwind</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;