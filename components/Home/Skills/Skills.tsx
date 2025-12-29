import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "React Js",
    icon: <SiReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
];

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill) => {
          return;
        })}
      </div>
    </div>
  );
};

export default Skills;
