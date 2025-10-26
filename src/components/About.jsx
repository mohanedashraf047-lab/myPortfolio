import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 text-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-70 px-6 sm:px-10 md:px-20 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6">
          About Me
        </h2>
        <p className="max-w-3xl mx-auto text-gray-200 text-base sm:text-lg leading-relaxed">
          I'm a web developer passionate about turning ideas into elegant,
          interactive, and functional designs. I work with modern tools like
          React, Vite, and Tailwind CSS to craft responsive and accessible
          applications.
        </p>
      </div>
    </section>
  );
};

export default About;
