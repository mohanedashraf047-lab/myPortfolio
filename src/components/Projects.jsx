import React from "react";

const projects = [
  {
    title: "Shop Style Website",
    desc: "A website built with React, Vite, API, Redux, React Router, and Tailwind CSS.",
    demo: "https://shopstyle-gilt.vercel.app/",
    code: "https://github.com/mohanedashraf047-lab/shopstyle",
  },
  {
    title: "Shop Caia",
    desc: "A app built with React, Vite, React-Router, Redux, Axios and API.",
    demo: "https://shop-products-six.vercel.app/",
    code: "https://github.com/mohanedashraf047-lab/shop-products.git",
  },
  {
    title: "Add Product",
    desc: "A simple Add Product app using JavaScript, CSS3, HTML5, Local Storage.",
    demo: "https://add-product-hazel.vercel.app/",
    code: "https://github.com/mohanedashraf047-lab/addProduct.git",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-fixed bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-70 py-12 px-6 sm:px-10 md:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-10 text-center">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-gray-800 bg-opacity-80 p-6 rounded-lg hover:scale-105 duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-cyan-300">
                {p.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-400 duration-300 text-sm"
                >
                  🚀 Live Demo
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-500 px-4 py-2 rounded hover:bg-cyan-500 hover:text-black duration-300 text-sm"
                >
                  📝 Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
