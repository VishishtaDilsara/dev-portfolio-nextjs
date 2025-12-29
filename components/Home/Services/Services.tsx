import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="scroll-mt-[12vh] pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Collaborate with brand <br /> and agencies to create <br /> impactful
        results.
      </h1>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-stretch">
        <div data-aos="flip-right" className="h-full">
          <ServiceCard
            icon="/images/s1.png"
            name="UI and UX"
            description="Designing intuitive interfaces that focus on clarity, usability, and user satisfaction"
          />
        </div>

        <div data-aos="flip-right" data-aos-delay="200" className="h-full">
          <ServiceCard
            icon="/images/s2.png"
            name="Web and Mobile App"
            description="Building responsive web and mobile applications with performance and usability in mind"
          />
        </div>

        <div data-aos="flip-right" data-aos-delay="300" className="h-full">
          <ServiceCard
            icon="/images/s3.png"
            name="Design & Creativity"
            description="Creating visually engaging designs that communicate ideas clearly and effectively"
          />
        </div>

        <div data-aos="flip-right" data-aos-delay="400" className="h-full">
          <ServiceCard
            icon="/images/s4.png"
            name="Development"
            description="Developing scalable and maintainable solutions using modern development practices"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
