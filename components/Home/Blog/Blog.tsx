import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My latest <span className="text-cyan-300">Blogs</span>
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-anchor-placement="top-center"
        data-aos-delay="100"
        className="w-[90%] sm:w-[80%] xl:w-[70%] mx-auto mt-16
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
      >
        <BlogCard
          image="/images/b1.jpg"
          title="How to Build a Simple Portfolio Website with Next.js"
          date="05 July 2025"
          stack={["React", "Node.js", "MongoDB"]}
        />

        <BlogCard
          image="/images/b2.jpg"
          title="Blog Title 2"
          date="05 July 2025"
          stack={["React", "Node.js", "Express.js"]}
        />

        <BlogCard
          image="/images/b3.jpg"
          title="Blog Title 3"
          date="05 July 2025"
          stack={["React", "MongoDB", "Express.js"]}
        />
      </div>
    </div>
  );
};

export default Blog;
