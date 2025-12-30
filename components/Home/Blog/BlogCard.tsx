import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";

type Props = {
  image: string;
  title: string;
  date: string;
  stack: string[];
  link: string;
};

const BlogCard = ({ image, title, date, stack, link }: Props) => {
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
      {/* Image */}
      <div className="relative w-full h-44 sm:h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Date */}
        <span className="text-xs uppercase tracking-wider text-gray-400">
          {date}
        </span>

        {/* Title */}
        <h2 className="mt-2 text-lg sm:text-xl font-semibold text-white leading-snug">
          {title}
        </h2>

        {/* Tech Stack – clean text list */}
        <div className="mt-4 text-sm font-mono text-gray-400">
          {stack.map((item, index) => (
            <span key={index}>
              {item}
              {index < stack.length - 1 && (
                <span className="mx-1 text-gray-600">,</span>
              )}
            </span>
          ))}
        </div>

        {/* Read More */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between text-cyan-400 text-sm font-medium"
          >
            <div className="flex items-center gap-3">
              <FaLinkedin className="w-4 h-4" />
              <span className="tracking-wide">Read article</span>
            </div>

            <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
