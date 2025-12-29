"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      {/* Background Effects */}
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/s1.jpg"
          alt="hero"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide"
        >
          Creating web Products, <br /> brands,{" "}
          <span className="text-cyan-300">and experiences.</span>{" "}
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          Hi! I'm Vishishta - A Passionate
          <span className="text-cyan-300 font-bold">
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer",
                  "Devops Enthusiast",
                  "Cloud Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="group mt-8 px-10 py-4 rounded-full text-base sm:text-lg font-semibold
  text-cyan-300 border-2 border-cyan-400
  bg-transparent
  transition-all duration-300 ease-out
  hover:bg-cyan-400 hover:text-black
  flex items-center gap-3
  shadow-[0_0_0_0_rgba(34,211,238,0.6)]
  hover:shadow-[0_0_0_8px_rgba(34,211,238,0.15)]
  active:scale-95 cursor-pointer"
        >
          <span className="tracking-wide">See my Work</span>

          <BsArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
