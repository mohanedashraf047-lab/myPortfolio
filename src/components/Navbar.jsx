import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 text-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-cyan-400 font-serif italic">Mohand Ashraf</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 duration-200"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/YourName_CV.pdf"
              download
              className="bg-cyan-500 px-3 py-1 rounded hover:bg-cyan-400 duration-300"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col md:hidden bg-gray-800 px-6 pb-4 space-y-3 text-center">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block hover:text-cyan-400 duration-200"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/YourName_CV.pdf"
              download
              className="bg-cyan-500 px-3 py-1 rounded hover:bg-cyan-400 duration-300"
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
