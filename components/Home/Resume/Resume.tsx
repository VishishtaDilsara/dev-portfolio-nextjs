import React from "react";
import ResumeCard from "./ResumeCard";
import {
  FaAws,
  FaChartLine,
  FaCodepen,
  FaDocker,
  FaGraduationCap,
  FaReact,
  FaSchool,
  FaUniversity,
} from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";
import { FaFlutter } from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";
import { MdComputer } from "react-icons/md";

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
              Icon={FaSchool}
              role="Ordinary Level"
              date="Dec 2018"
              description="Successfully completed Ordinary Level examinations in English medium with 8 As and 1 B "
            />
            <ResumeCard
              Icon={FaChartLine}
              role="Advanced Level"
              date="Jan 2019 - Feb 2022"
              description="Successfully completed Advanced Level examinations in the Mathematics stream with grades of 1 A, 1 B, and 1 C."
            />
            <ResumeCard
              Icon={MdComputer}
              role="Diploma in Information Technology"
              date="May 2022 - May 2023"
              description="Successfully completed the Assured Diploma in Information Technology (DITEC) at ESOFT Metro Campus."
            />
            <ResumeCard
              Icon={FaGraduationCap}
              role="BComp(Hons.) in Software Engineering"
              date="June 2023 - Present"
              description="Currently pursuing a Bachelor of Computing (Hons.) in Software Engineering at the University of Sri Jayewardenepura."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
