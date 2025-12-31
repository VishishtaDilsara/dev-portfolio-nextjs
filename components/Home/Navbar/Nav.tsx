"use client";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed w-full h-[12vh] z-[900] transition-all duration-200 ${
        navBg ? "bg-[#0f142ed9] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            VISHISHTA
          </h1>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              scroll={true}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="/Vishishta_cv_4.pdf"
            download
            className="px-6 py-2.5 border border-white text-white rounded-md
  hover:bg-cyan-300 hover:border-cyan-300 hover:text-black
  transition-all duration-200 flex items-center justify-center cursor-pointer"
          >
            <BiDownload className="w-5 h-5 mr-2" />
            <span>Download CV</span>
          </a>

          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
