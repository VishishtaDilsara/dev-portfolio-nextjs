"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ClientReview = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Kind of words from satisfies <br />
        <span className="text-cyan-300">clients</span>
      </h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          pauseOnHover={false}
          shouldResetAutoplay={true}
          draggable={true}
          swipeable={true}
          keyBoardControl={true}
        >
          <ClientReviewCard
            image="/images/c1.png"
            name="John Doe"
            role="CEO, Lanscape"
            review="Landscape is an excellent company to work with. They are very professional and have a great team."
          />
          <ClientReviewCard
            image="/images/c2.png"
            name="John Doe"
            role="CEO, Lanscape"
            review="Landscape is an excellent company to work with. They are very professional and have a great team."
          />
          <ClientReviewCard
            image="/images/c3.png"
            name="John Doe"
            role="CEO, Lanscape"
            review="Landscape is an excellent company to work with. They are very professional and have a great team."
          />
          <ClientReviewCard
            image="/images/c4.png"
            name="John Doe"
            role="CEO, Lanscape"
            review="Landscape is an excellent company to work with. They are very professional and have a great team."
          />
          <ClientReviewCard
            image="/images/c5.png"
            name="John Doe"
            role="CEO, Lanscape"
            review="Landscape is an excellent company to work with. They are very professional and have a great team."
          />
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default ClientReview;
