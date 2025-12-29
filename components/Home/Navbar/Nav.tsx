"use client";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#0f142ed9] shadow-md " : "fixed"
      } duration-200 h-[12vh] z-10000 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            VISHISHTA
          </h1>
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
              >
                {" "}
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2.5 border border-white text-white rounded-md hover:bg-cyan-300 hover:border-cyan-300 hover:text-black transition-all duration-20 flex items-center justify-center cursor-pointer ">
            <BiDownload className="w-5 h-5 mx-2" />
            <span> Download CV</span>
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
