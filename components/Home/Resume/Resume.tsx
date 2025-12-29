import React from "react";
import ResumeCard from "./ResumeCard";
import { FaAws, FaCodepen, FaDocker, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";
import { FaFlutter } from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";

const Resume = () => {
  return (
    <section id="resume" className="scroll-mt-[12vh] pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Left Side - Work Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-400">Experience</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard
              Icon={FaDocker}
              role="DevOps Engineer"
              description="A DevOps Engineer experienced in deploying full-stack applications on AWS using CI/CD pipelines, GitHub Actions, and Docker."
            />
            <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Developer"
              description="A full-stack developer with hands-on experience building web applications using MERN stack, Next.js, Laravel, and pure HTML, CSS, and JavaScript."
            />
            <ResumeCard
              Icon={FaFlutter}
              role="Flutter Developer"
              description="A Flutter developer with experience in building real-world mobile applications using modern development practices."
            />

            <ResumeCard
              Icon={FaAws}
              role="Cloud Engineer"
              description="AWS Cloud Quest - Practitioner Badge &nbsp;|&nbsp; Aviatrix Multicloud Certified Badge"
            />
          </div>
        </div>
        {/* Right Side - Education Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-400">Education</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
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
    </section>
  );
};

export default Resume;
