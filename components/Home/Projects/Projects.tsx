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
            title="Full-Stack MERN E-Commerce Platform for Beauty Glow"
            image="/images/Pr1.png"
            description="A full-stack MERN web application for a cosmetic brand called Beauty Glow. The project includes a complete frontend and backend, containerized using Docker, and deployed on AWS. A CI/CD pipeline with GitHub Actions was implemented to automate testing, building, and deployment, ensuring smooth updates and reliable production releases."
            techStack={[
              "React",
              "Node.js",
              "MongoDB",
              "Express.js",
              "Supabase",
              "Docker",
              "AWS",
              "GitHub Actions",
            ]}
            githubUrl="https://github.com/VishishtaDilsara/MERN-Backend-test.git"
            demoUrl="http://54.91.176.133:3000/"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ProjectCard
            title="Developer Portfolio Website using Next.js"
            image="/images/Pr2.png"
            description="A personal developer portfolio built with Next.js and Tailwind CSS, deployed on AWS S3 and CloudFront with Namecheap domain management and a GitHub Actions–based CI/CD pipeline configured using AWS IAM. Showcases my projects skills and experience through a modern responsive design."
            techStack={[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "AWS",
              "GitHub Actions",
              "Namecheap",
            ]}
            githubUrl="https://github.com/VishishtaDilsara/dev-portfolio-nextjs.git"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ProjectCard
            title="Graphic Design Portfolio Website using React.js"
            image="/images/Pr3.png"
            description="Developed a graphic design portfolio website using React.js to showcase my creative work, including logo designs, social media creatives, and other design projects, with a clean and responsive user interface."
            techStack={["React.js", "bootstrap", "CSS", "JavaScript"]}
            githubUrl="https://github.com/VishishtaDilsara/noxium-portfolio.git"
            demoUrl="https://vishishtadilsara.github.io/noxium-portfolio/"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ProjectCard
            title="Smartflix Movie Recommender System"
            image="/images/Pr4.png"
            description="Developed a group based movie recommendation system using KNN algorithm then designed a simple user interface using Python to demonstrate personalized movie suggestions effectively for academic project implementation purposes."
            techStack={[
              "Python",
              "KNN Algorithm",
              "numpy",
              "pandas",
              "sklearn",
            ]}
            githubUrl="https://github.com/VishishtaDilsara/smartflix-ml-recommender.git"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <ProjectCard
            title="E-Commerce Mobile Application"
            image="/images/Pr7.png"
            description="Developed a mobile e commerce application using Flutter and Firebase inspired by the Abans platform featuring product listings user authentication and real time database integration with a clean modern interface."
            techStack={["Flutter", "Dart", "Firebase", "Firebase Firestore"]}
            githubUrl="https://github.com/VishishtaDilsara/Ecommerce-Mobile-App-Abans.git"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="500"
        >
          <ProjectCard
            title="Weather Forecast Mobile Application"
            image="/images/Pr6.png"
            description="developed a weather forecast mobile application using Flutter that retrieves real time weather data from WeatherAPI and displays current conditions forecasts and location based weather information through a simple interface."
            techStack={["Flutter", "Dart", "WeatherAPI"]}
            githubUrl="https://github.com/VishishtaDilsara/weather_app.git"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <ProjectCard
            title="Skill Finder Mobile Application"
            image="/images/Pr8.png"
            description="Developed a skill finder mobile application using Flutter and Firebase for a real world client enabling users to discover service providers and connect with professionals offering various on demand services."
            techStack={["Flutter", "Dart", "Firebase", "Firebase Firestore"]}
            githubUrl="https://github.com/VishishtaDilsara/skill_finder_mobile_app_for_a_client.git"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="700"
        >
          <ProjectCard
            title="Font Detector Chrome Extension"
            image="/images/Pr9.png"
            description="Developed a Chrome extension that allows users to select any word on a webpage and instantly identify its font family font weight and font size for quick design inspection."
            techStack={["JavaScript", "CSS", "Chrome Extensions API"]}
            githubUrl="https://github.com/VishishtaDilsara/font-detector-extension-chrome.git"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="800"
        >
          <ProjectCard
            title="Open Source Contribution 1 - MiroTalk"
            image="/images/Pr10.png"
            description="Contributed to the open source project MiroTalk on GitHub, an online video conferencing platform. My contribution involved identifying and fixing a bug related to the whiteboard eraser tool, improving its functionality and overall user experience during collaborative sessions."
            techStack={[
              "GitHub Contribution",
              "Open Source",
              "Bug Fixing",
              "JavaScript",
            ]}
            githubUrl="https://github.com/miroslavpejic85/mirotalk/pull/322"
            demoUrl="https://p2p.mirotalk.com/"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="900"
        >
          <ProjectCard
            title="Open Source Contribution 2 - MiroTalk"
            image="/images/Pr11.png"
            description="Contributed to the open source project MiroTalk by implementing a new delete objects feature in the whiteboard. This enhancement allows users to remove selected objects using the Delete button, improving usability beyond the existing eraser-only functionality."
            techStack={[
              "GitHub Contribution",
              "Open Source",
              "Feature Implementation",
              "JavaScript",
            ]}
            githubUrl="https://github.com/miroslavpejic85/mirotalk/pull/326"
            demoUrl="https://p2p.mirotalk.com/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
