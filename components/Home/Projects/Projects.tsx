import Image from "next/image";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-[12vh] pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300">Projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 ">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <ProjectCard
            title="Modern Finance Dashboard UI"
            image="/images/p1.jpg"
            description="This is a sample project done by me"
            techStack={["React", "Node.js", "MongoDB", "Express.js"]}
            githubUrl="https://github.com/VishishtaDilsara/noxium-portfolio.git"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ProjectCard
            title="E-commerce Website"
            image="/images/p2.jpg"
            description="This is a sample project done by me"
            techStack={["React", "Node.js", "MongoDB", "Express.js"]}
            githubUrl="https://github.com/VishishtaDilsara/noxium-portfolio.git"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ProjectCard
            title="Weather App"
            image="/images/p3.jpg"
            description="This is a sample project done by me"
            techStack={["React", "Node.js", "MongoDB", "Express.js"]}
            githubUrl="https://github.com/VishishtaDilsara/noxium-portfolio.git"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ProjectCard
            title="To-do List App"
            image="/images/p4.jpg"
            description="This is a sample project done by me"
            techStack={["React", "Node.js", "MongoDB", "Express.js"]}
            githubUrl="https://github.com/VishishtaDilsara/noxium-portfolio.git"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
