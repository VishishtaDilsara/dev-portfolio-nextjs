import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import {
  FaBehance,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <div>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 leading-tight">
            Let’s schedule a call and build something impactful
          </h1>

          {/* Sub text */}
          <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-xl">
            I’m currently accepting new projects and would love to hear about
            your ideas, challenges, and goals.
          </p>

          {/* Contact info */}
          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <BiPhone className="w-5 h-5 text-cyan-300" />
              </div>
              <p className="text-lg font-medium text-gray-300">
                +94 761 673 391
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <BiEnvelope className="w-5 h-5 text-cyan-300" />
              </div>
              <p className="text-lg font-medium text-gray-300">
                vishishtadilsara2002@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <BiMap className="w-5 h-5 text-cyan-300" />
              </div>
              <p className="text-lg font-medium text-gray-300">
                No. 01, Indigasketiya, Baddegama
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center mt-10 space-x-4">
            <div
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10
      flex items-center justify-center cursor-pointer
      transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <FaFacebookF className="w-5 h-5 text-gray-300" />
            </div>

            <div
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10
      flex items-center justify-center cursor-pointer
      transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <FaLinkedin className="w-5 h-5 text-gray-300" />
            </div>

            <div
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10
      flex items-center justify-center cursor-pointer
      transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <FaInstagram className="w-5 h-5 text-gray-300" />
            </div>

            <div
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10
      flex items-center justify-center cursor-pointer
      transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <FaGithub className="w-5 h-5 text-gray-300" />
            </div>

            <div
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10
      flex items-center justify-center cursor-pointer
      transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <FaBehance className="w-5 h-5 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:p-10 p-5 bg-[#131332] rounded-lg">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3.5 bg-[#363659] mt-6 text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="px-4 py-3.5 bg-[#363659] mt-6 text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-3.5 bg-[#363659] mt-6 text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
          ></textarea>
          <button className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
