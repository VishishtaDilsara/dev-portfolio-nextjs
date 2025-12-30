import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  image: string;
  demoUrl?: string;
};

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  image,
  demoUrl,
}: Props) => {
  return (
    <div
      className="h-full rounded-2xl overflow-hidden
      bg-[#0f172a]
      border border-white/10
      flex flex-col
      transition-all duration-300 ease-out
      hover:border-cyan-400/40
      hover:-translate-y-1
      hover:shadow-[0_12px_30px_rgba(34,211,238,0.12)]"
    >
      {/* Project Image */}
      <div className="relative w-full h-44 sm:h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs sm:text-sm rounded-full
              bg-white/10 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-gray-500">View Source</span>

          <div className="flex gap-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full
          flex items-center justify-center
          bg-white/10 hover:bg-cyan-400/20
          transition-all duration-300"
              >
                {/* Use a demo icon if you want, GitHub kept for now */}
                <FaExternalLinkAlt className="w-5 h-5 text-white" />
              </a>
            )}

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full
            flex items-center justify-center
            bg-white/10 hover:bg-cyan-400/20
            transition-all duration-300"
            >
              <FaGithub className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
