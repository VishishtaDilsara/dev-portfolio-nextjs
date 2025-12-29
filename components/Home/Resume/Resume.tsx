import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Left Side - Work Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-400">Experience</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Developer"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <ResumeCard
              Icon={FaReact}
              role="Front-End Developer"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Back-End Developer"
              description="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
            />
          </div>
        </div>
        {/* Right Side - Education Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-400">Education</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={BiBadge}
              role="Design Institute"
              date="Jan 2023 - Dec 2024"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <ResumeCard
              Icon={FaReact}
              role="Bachelor of Computer Science"
              date="Jan 2019 - Dec 2022"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Certificate in DM"
              date="Jan 2016 - Jan 2019"
              description="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
