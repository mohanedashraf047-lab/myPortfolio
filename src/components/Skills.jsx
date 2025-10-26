import React from "react";

const Skills = () => {
  const skills = [
    "React",
    "Redux",
    "React Router",
    "Axios API",
    "Vite",
    "Tailwind CSS",
    "Git",
    "JavaScript",
    "Figma",
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-900 text-white text-center px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-cyan-300 border border-cyan-500 hover:bg-cyan-500 hover:text-black duration-300 text-sm sm:text-base"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
