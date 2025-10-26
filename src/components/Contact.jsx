import React from "react";
import { FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-70 py-12 px-6 sm:px-10 md:px-20 rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-10 text-center">
          Contact Me
        </h2>

        <p className="text-gray-300 text-center mb-8">
          Feel free to follow me or contact me through any of the options below!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/mohaned.ashraf.3726/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg duration-300"
          >
            <FaFacebook size={20} />
            Follow on Facebook
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201092747946?text=Hello%20I%20found%20you%20on%20your%20portfolio!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 px-6 py-3 rounded-lg duration-300"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mohanedashraf047@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg duration-300"
          >
            <FaEnvelope size={20} />
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
