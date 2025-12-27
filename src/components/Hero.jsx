import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-6 md:p-10 rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3">
          Hi, I'm <span className="text-cyan-400">Mohand Ashraf</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-4">
          Frontend Developer
        </h2>
        <p className="text-gray-200 max-w-lg mx-auto text-sm sm:text-base mb-6">
          I build responsive and user-friendly web applications with clean,
          modern design.
        </p>
        <div className="space-x-3">
          <a
            href="#projects"
            className="bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-400 duration-300 text-sm sm:text-base"
          >
            View My Work
          </a>
          <a
            href="public\MohanedAshraf_CV.pdf"
            download
            className="border border-cyan-500 px-4 py-2 rounded hover:bg-cyan-500 hover:text-black duration-300 text-sm sm:text-base"
            target="_blank" rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
